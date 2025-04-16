# -*- coding: utf-8 -*-

from odoo import models, fields


class OwlDev(models.Model):
    _name = 'owl.dev.todo.list'
    _description = 'owl_dev.owl_dev'

    name = fields.Char()
    completed = fields.Boolean()
    color = fields.Char(default='#000000')


