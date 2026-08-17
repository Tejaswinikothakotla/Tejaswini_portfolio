import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2020 - 2023',
    title: 'Narayana College',
    subtitle: 'Intermediate (MPC) | 96%',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2023 - 2027',
    title: 'Vignan University',
    subtitle: 'B.Tech CSE | CGPA: 8.57',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2024',
    title: 'Cloud & AI Certs',
    subtitle: 'AWS & Google GenAI Badges',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2025',
    title: 'Hackathon Winner',
    subtitle: 'Smart Subject Allocation',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: 'Present',
    title: 'Full-Stack Developer',
    subtitle: 'MERN & AI Solutions',
    position: 'right',
  }
];