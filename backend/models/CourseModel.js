import mongoose from 'mongoose';
const courseSchema = new mongoose.Schema({
title: { type: String, required: true },
description: { type: String, required: true },
price: { type: Number, required: true, default: 0 },
instructor: {
type: mongoose.Schema.Types.ObjectId,
ref: 'User', // This creates a relationship to the User model
required: true,
},
category: {
type: mongoose.Schema.Types.ObjectId,
ref: 'Category', // Relationship to the Category model
required: true,
},
// ... other fields like thumbnail, studentsEnrolled, rating, etc.
}, { timestamps: true });
const Course = mongoose.model('Course', courseSchema);
export default Course;