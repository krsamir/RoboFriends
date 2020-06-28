import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import {robots} from './robots'; //since import is not default we have to destruct it

ReactDOM.render(
  <React.StrictMode>
    <Card id = {robots[0].id} first_name = {robots[0].first_name} last_name = {robots[0].last_name} />
    <Card id = {robots[1].id} first_name = {robots[1].first_name} last_name = {robots[1].last_name}/>
    <Card id = {robots[2].id} first_name = {robots[2].first_name} last_name = {robots[2].last_name}/>
    <Card id = {robots[3].id} first_name = {robots[3].first_name} last_name = {robots[3].last_name}/>
    <Card id = {robots[4].id} first_name = {robots[4].first_name} last_name = {robots[4].last_name}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
