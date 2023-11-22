import logo from './logo.svg';
import './App.css';
import Wavy from './app/wavy.js';
import { Profiler } from 'react';

export default function App() {
  return (
    <Profiler id="Wavy" >
      <Wavy />
    </Profiler>
  );
}

