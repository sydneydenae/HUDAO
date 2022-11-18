from flask import Flask, render_template, url_for, flash, redirect
from flask_sqlalchemy import SQLalchemy

app = Flask(__name__)

app.config['SECRET_KEY'] = "1234"
app.config['SQLALCHEMY_DATABASE-URI'] = 'sqlite:///site.db'

db = SQLalchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)


