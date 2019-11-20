****************
NodeJS: node_mysql
****************

Node_mysql application implemented using `Express.js <http://expressjs.com/>`_ microframework.

Express version: 4.17.1

Middlewares/extentions used:

* `Mysql <https://www.npmjs.com/package/mysql>`_ for database
* ... and `others <https://github.com/WayneWong235/node_mysql/blob/master/package.json>`_

==========================
Installation and launching
==========================

-------
Cloning
-------

Clone the repo:

.. code-block:: bash

    $ git clone https://github.com/WayneWong235/node_mysql.git YOUR_PROJECT_DIR/

-------------------
Install environment
-------------------
Use `npm <https://www.npmjs.org/>`_ to manage dependencies.

Install dependencies

.. code-block:: bash

    $ cd YOUR_PROJECT_DIR/node_mysql
    $ npm install

------
Launch
------

Start built-in web server:

.. code-block:: bash

    $ cd YOUR_PROJECT_DIR/node_mysql
    $ npm start

Go to http://127.0.0.1:8080/ in your browser

---------
REST API
---------

GET http://localhost:8080/fetchStudents?class=<classname> for students in classname
GET http://localhost:8080/fetchStudents?id=<student_id> for student detail
POST http://localhost:8080/student for INSERT student detail with json
PUT http://localhost:8080/student for UPDATE student detail with json
DELETE http://localhost:8080/student for DELETE student detail with json

============
Contribution
============

Please send your pull requests in the ``master`` branch.

Always prepend your commits with a framework name:

.. code-block:: bash

    Express-mysql: Implemented sign in functionality
