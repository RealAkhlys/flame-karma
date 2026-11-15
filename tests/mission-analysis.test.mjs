import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {missionFit,missionSummary,relevant,rankedMissionStudies} from '../src/insights.js';

const knowledge=JSON.parse(readFileSync(new URL('../dist/assets/research/investigations.json',import.meta.url)));
const studies=knowledge.investigations;

test('mission proximity never presents partial-gravity context as direct validation',()=>{
 const saffire=studies.find(study=>study.id==='saffire-i');
 const luci=studies.find(study=>study.id==='luci');
 assert.equal(missionFit(saffire,'iss').label,'High Mission Proximity');
 assert.equal(missionFit(saffire,'lunar').label,'Indirect Evidence');
 assert.equal(missionFit(luci,'lunar').label,'Moderate Proximity');
 assert.match(missionFit(luci,'lunar').reason,/Simulated/i);
 for(const study of studies){
  assert.notEqual(missionFit(study,'mars').label,'High Mission Proximity');
  assert.notEqual(missionFit(study,'rover').label,'High Mission Proximity');
 }
});

test('mission ranking respects safety purpose and prioritizes sourced tables',()=>{
 const detection=rankedMissionStudies(studies,'iss','detection');
 assert(detection.length>0);
 assert(detection.every(({study})=>relevant(study,'detection')));
 assert(detection.some(({study})=>study.id==='same-r'));
 assert(detection.findIndex(({study})=>study.id==='same-r')<detection.findIndex(({study})=>study.id==='daft'));
 const lunar=rankedMissionStudies(studies,'lunar','all');
 assert.equal(lunar[0].study.id,'luci');
});

test('each mission selection produces a distinct visible context',()=>{
 const summaries=['iss','lunar','mars','rover'].map(mission=>missionSummary(studies,mission));
 assert.equal(new Set(summaries.map(summary=>summary.label)).size,4);
 assert.equal(new Set(summaries.map(summary=>summary.description)).size,4);
 assert.match(summaries.find(summary=>summary.mission==='lunar').description,/lunar/i);
 assert.match(summaries.find(summary=>summary.mission==='mars').description,/Mars/i);
 assert.match(summaries.find(summary=>summary.mission==='rover').description,/rover/i);
});
