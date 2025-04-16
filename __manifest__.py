# -*- coding: utf-8 -*-
{
    'name': "owl dev",

    'summary': "Short (1 phrase/line) summary of the module's purpose",

    'description': """
Long description of module's purpose
    """,

    'author': "My Company",
    'website': "https://www.yourcompany.com",


    'category': 'Uncategorized',
    'version': '0.1',


    'depends': ['base'],


    'data': [
        'security/ir.model.access.csv',
        'views/views.xml',
        'views/templates.xml',
    ],
    'assets':{
     'web.assets_backend':[
         'owl_dev/static/src/components/*/*.js',
         'owl_dev/static/src/components/*/*.scss',
         'owl_dev/static/src/components/*/*.xml',
     ]
    }


}

