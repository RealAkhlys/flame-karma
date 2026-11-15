import test from 'node:test';
import assert from 'node:assert/strict';
import {conceptualProfile} from '../src/simulator.js';

test('earth and microgravity profiles remain visibly distinct under identical inputs',()=>{
 const input={oxygen:21,airflow:10},earth=conceptualProfile('earth',input),micro=conceptualProfile('microgravity',input);
 assert.notEqual(earth.shape,micro.shape);
 assert.match(earth.transport,/doğal taşınım/);
 assert.match(micro.transport,/difüzyon/);
 assert(earth.diffusion<micro.diffusion);
});

test('airflow changes conceptual direction without producing scientific outcomes',()=>{
 const low=conceptualProfile('microgravity',{oxygen:21,airflow:2}),high=conceptualProfile('microgravity',{oxygen:21,airflow:35});
 assert(low.tilt<high.tilt);
 assert.match(low.airflowResponse,/yukarı yönü oluşmaz/);
 assert.match(high.airflowResponse,/güçlü biçimde yönlendirir/);
 assert.match(conceptualProfile('microgravity',{oxygen:21,airflow:20}).airflowResponse,/güçlü biçimde yönlendirir/);
});

test('oxygen visualization factors stay bounded',()=>{
 for(const mode of ['earth','microgravity']){
  assert(conceptualProfile(mode,{oxygen:0,airflow:0}).intensity>=0);
  assert(conceptualProfile(mode,{oxygen:100,airflow:100}).intensity<=1);
 }
});
