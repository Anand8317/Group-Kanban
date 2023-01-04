import './style.css';
import {apiCall} from './modules/apiCall';
import render from './modules/render';

const run = async () => {
  await apiCall();
  render();
}

run();
