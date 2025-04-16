# -*- coding: utf-8 -*-
# from odoo import http


# class OwlDev(http.Controller):
#     @http.route('/owl_dev/owl_dev', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/owl_dev/owl_dev/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('owl_dev.listing', {
#             'root': '/owl_dev/owl_dev',
#             'objects': http.request.env['owl_dev.owl_dev'].search([]),
#         })

#     @http.route('/owl_dev/owl_dev/objects/<model("owl_dev.owl_dev"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('owl_dev.object', {
#             'object': obj
#         })

