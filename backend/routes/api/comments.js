const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

/**
 * Get all comments for a specific post
 * @route GET /comments/:postId
 * @param {string} req.params.postId - The ID of the post
 * @returns {Array} List of comments
 */
router.get("/:postId", async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId });
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * Delete a comment by its ID
 * @route DELETE /comments/:commentId
 * @param {string} req.params.commentId - The ID of the comment to delete
 * @returns {Object} Success message
 * @returns {404} Comment not found
 * @returns {400} Invalid comment ID
 * @returns {500} Server error
 */
router.delete("/:commentId", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.commentId);

        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (err) {
        if (err.name === "CastError") {
            return res.status(400).json({ message: "Invalid comment ID" });
        }

        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
// Hey GitHub Copilot!
