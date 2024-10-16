const express = require("express");
const Photo = require("../models/Photo");
const User = require("../models/User");

const router = express.Router();

// Upload or replace photo
router.post("/upload", async (req, res) => {
  try {
    const { imageUrl, userId } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    // Check if the user already has a photo
    if (user.photo) {
      // Replace the existing photo with the new one
      const existingPhoto = await Photo.findById(user.photo);
      if (existingPhoto) await existingPhoto.remove(); // Optionally delete the old photo

      const newPhoto = new Photo({ imageUrl, user: user._id });
      await newPhoto.save();

      user.photo = newPhoto._id; // Update reference to the new photo
    } else {
      // If no photo exists, upload the new one
      const photo = new Photo({ imageUrl, user: user._id });
      await photo.save();
      user.photo = photo._id; // Assign the new photo
    }

    await user.save();
    res.status(201).json({ message: "Photo uploaded successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to upload photo" });
  }
});

router.post("/feedback/:photoId", async (req, res) => {
  try {
    const { photoId } = req.params;
    const {
      reviewerId,
      professionalism,
      kindness,
      competence,
      confidence,
      smartness,
    } = req.body;

    const photo = await Photo.findById(photoId).populate("user");
    if (!photo) return res.status(404).json({ error: "Photo not found" });

    // Check if the user receiving the feedback has enough points
    if (photo.user.points <= 0) {
      return res
        .status(403)
        .json({ error: "The user has no points left to receive feedback" });
    }

    // Add feedback to the photo
    const feedback = {
      reviewer: reviewerId,
      professionalism,
      kindness,
      competence,
      confidence,
      smartness,
    };

    photo.feedback.push(feedback);
    await photo.save();

    // Update points for the reviewer and reviewed user
    const reviewer = await User.findById(reviewerId);
    reviewer.points += 1; // Reviewer earns 1 point
    await reviewer.save();

    photo.user.points -= 1; // Reviewed user spends 1 point
    await photo.user.save();

    res
      .status(201)
      .json({ message: "Feedback submitted and points updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit feedback" });
  }
});

//Since each user can only have one photo, this route will return the single photo associated with a user.
router.get("/user/:userId/photo", async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).populate("photo");
    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json({ photo: user.photo });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve photo" });
  }
});

module.exports = router;
