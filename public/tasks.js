const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  dueDate: { type: Date },
  status: { type: String, enum: ['pending', 'in progress', 'completed'], default: 'pending' },
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);