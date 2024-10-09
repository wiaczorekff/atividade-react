const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Criar uma nova tarefa
router.post('/', async (req, res) => {
  const { title, description, assignedTo, dueDate, groupId } = req.body;
  try {
    const newTask = new Task({ title, description, assignedTo, dueDate, groupId });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
});

router.get('/:groupId', async (req, res) => {
    try {
      const tasks = await Task.find({ groupId: req.params.groupId });
      res.status(200).json(tasks);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao listar tarefas' });
    }
  });

  router.patch('/:id', async (req, res) => {
    const { status } = req.body;
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, { status }, { new: true });
      res.status(200).json(task);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao atualizar tarefa' });
    }
  });
  
  module.exports = router;