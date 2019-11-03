const muscles = {
  'SCM': {force_right: 0, force_left: 0, name: 'SCM', nerf: '', root: 'NC 11', svgPathRight: "M578 486.5l1-5h2l26.5 17 48 118.5-1 5.5-15-3-6.5-3.5-6.5-6-36.5-88.5-12-35z", svgPathLeft: "M780 486l-1.006-5h-2.013l-26.671 17L702 616.5l1.006 5.5 15.097-3 6.542-3.5 6.542-6 36.736-88.5L780 486z", view: "front" },
  'Trap': {force_right: 0, force_left: 0, name: 'Trap', nerf: '', root: 'NC 11, C3-4', svgPathRight: "M582.5 531l-9-17.5L547 556l-9.5 13-19.5 16-36.5 22.5-2 4 23 14.5 12 5 12.5 2 12-8.5 52-68.5-8.5-25z", svgPathLeft: "M774.386 530.573L783.265 513l26.143 42.678 9.372 13.054 19.238 16.067 36.009 22.594L876 611.41l-22.691 14.561-11.838 5.021L829.139 633l-11.839-8.536-51.3-68.786 8.386-25.105z", view: "front" },
  'Lat': {force_right: 0, force_left: 0, name: 'Lat', nerf: 'Thoracodorsal', root: 'C7', svgPathRight: "M746 1055.5L829.5 912l13.5-4.5h13.5l28.5-3 24.5-3 18.5-7 31.5-17v20L948 992l-30 143.5-33 66.5-21-9-28-17-23.5-17.5-26-23-12-13.5-9.5-11.5-10-14.5-9-22v-18.5z", svgPathLeft: "M666 1055.73l-82.522-143.283-13.342-4.493h-13.342l-28.166-2.996-24.213-2.995-18.284-6.989L455 878v19.969l11.365 94.355 29.649 143.276 32.614 66.4 20.754-8.99 27.672-16.97 23.225-17.47 25.695-22.97 11.86-13.48 9.388-11.48 9.883-14.48L666 1074.2v-18.47z", view: "back" },
  'Pec': {force_right: 0, force_left: 0, name: 'Pec', nerf: 'M&L pec nerve', root: 'C6-7-8', svgPathRight: "M506 636.5l-19.5-8.5-21.5 48-32 79.5-41 62.5 73 31 13 10.5 28 30 23.5 10.5H576l24-4.5 45-40 13.5-25v-142l-13.5-21-22.5-15-22.5-6-94-10z", svgPathLeft: "M852 636.5l19.5-8.5 21.5 48 32 79.5 41 62.5-73 31-13 10.5-28 30-23.5 10.5H782l-24-4.5-45-40-13.5-25v-142l13.5-21 22.5-15 22.5-6 94-10z", view: "front" },
  'Deltoide': {force_right: 0, force_left: 0, name: 'Deltoide', nerf: 'Ax nerve', root: 'C5-6', svgPathRight: "M400.5 622c9.5-2.667 29.2-8.3 32-9.5l29 3.5 20 12.5-33.5 85-35 63.5-37.5 48.5L340 849l-8.5 13.5H328l-3-13.5-3-72v-18.5l3-18 6.5-27L340 687l18-33.5 17.5-17 25-14.5z", svgPathLeft: "M957 622.5c-9.5-2.667-29.2-8.3-32-9.5l-29 3.5-20 12.5 33.5 85 35 63.5L982 826l35.5 23.5 8.5 13.5h3.5l3-13.5 3-72V759l-3-18-6.5-27-8.5-26.5-18-33.5-17.5-17-25-14.5z", view: "front" },
  'Biceps': {force_right: 0, force_left: 0, name: 'Biceps', nerf: 'MSK', root: 'C5-6', svgPathRight: "M391 853l6.5-28-17.5 3-72.5 77.5-24 71.5-13 67 6 41 21-16 14-16 17.5-33 62-167z", svgPathLeft: "M966.5 854l-6.5-28 17.5 3 72.5 77.5 24 71.5 13 67-6 41-21-16-14-16-17.5-33-62-167z", view: "front" },
  'Triceps': {force_right: 0, force_left: 0, name: 'Triceps', nerf: 'Radial', root: 'C7', svgPathRight: "M1012 822l-41 45.5v16l25 102 42 93c15.33 16.17 46.56 53.08 49.5 48.5 4.5-7-5.83-15.17-4.5-19.5l-15-29-15.5-49v-39c1.67-14.167 5.9-43.1 9.5-45.5 3.6-2.4 19 29.5 30 45.5l-22-145-58-23.5z", svgPathLeft: "M402 822l41 45.442v15.979l-25 101.87-42 92.879c-15.333 16.15-46.558 53.01-49.5 48.44-4.5-6.99 5.833-15.15 4.5-19.47l15-28.97 15.5-48.93v-38.955c-1.667-14.149-5.9-43.045-9.5-45.442-3.6-2.397-19 29.462-30 45.442l22-144.815L402 822z", view: "back" },
  'PT': {force_right: 0, force_left: 0, name: 'PT', nerf: 'Median', root: 'C6-7', svgPathRight: "M175 1328.5l-38.5 26.75-8.5 24.28 26.5 7.56 20.5 7.41 15.5 25.5H206l-4-40.47 14-33.53-14-15-27-2.5z", svgPathLeft: "M1182 1329l38.5 26.61 8.5 24.14-26.5 7.52-20.5 7.37-15.5 25.36H1151l4-40.25-14-33.35 14-14.91 27-2.49z", view: "front" },
  'Supi': {force_right: 0, force_left: 0, name: 'Supi', nerf: 'Radial', root: 'C5-6', svgPathRight: "M227.5 1097.5L257 1049l20.5 48.5h11l-37 57.5-33.5 49-17.5 36.5-29.5 87-26 20.5 13.5-35.5 23-77.5 15.5-55 17.5-48 13-34.5z", svgPathLeft: "M1131 1100.5l-29.5-48.5-20.5 48.5h-11l37 57.5 33.5 49 17.5 36.5 29.5 87 26 20.5-13.5-35.5-23-77.5-15.5-55-17.5-48-13-34.5z", view: "front" },
  'ECRL(B)': {force_right: 0, force_left: 0, name: 'ECRL(B)', nerf: 'Radial', root: 'C6', svgPathRight: "M1159.5 1125.49l2.5-23 11 23 12.5 32.5 20.5 65 25.5 85.5 20 62.5-3 6-20-34.5-12-27.5-13.5-42-11.5-30.5-10.5-24-8-18-6-24.5-7.5-50.5z", svgPathLeft: "M253 1125.95l-2.5-22.96-11 22.96-12.5 32.44-20.5 64.88-25.5 85.35-20 62.38 3 5.99 20-34.44 12-27.45 13.5-41.92 11.5-30.44 10.5-23.96 8-17.97 6-24.45 7.5-50.41z", view: "back" },
  'FCR': {force_right: 0, force_left: 0, name: 'FCR', nerf: 'Median', root: 'C7', svgPathRight: "M202 1328l129-214.5h5.5L325 1152l-108.5 196.5L202 1328z", svgPathLeft: "M1155 1330.5L1026 1116h-5.5l11.5 38.5 108.5 196.5 14.5-20.5z", view: "front" },
  'FDP': {force_right: 0, force_left: 0, name: 'FDP', nerf: 'Med+Ulnar', root: 'C8', svgPathRight: "M1110.5 1168.49l-67-78h-13l8.5 58c4.33 12 13 37 13 41s25.33 51.34 38 74.5l62.5 100.5 31 58.5v17l9 23.5 12.5 20 8.5-14.5 7.5-11.5 17.5-17.5-128-271.5z", svgPathLeft: "M303 1168l67-78h13l-8.5 58c-4.333 12-13 37-13 41s-25.333 51.33-38 74.5L261 1364l-31 58.5v17l-9 23.5-12.5 20-8.5-14.5-7.5-11.5-17.5-17.5L303 1168z", view: "back" },
  'EDC': {force_right: 0, force_left: 0, name: 'EDC', nerf: 'Radial', root: 'C7', svgPathRight: "M1125 1079.49l6-28 15 17.5 9.5 26.5 4 38c3.17 19.5 9.5 59 9.5 61s10.67 25.5 16 37l23 73.5 30 64 28.5 50.5 6.5 10.5-25 5-6-5-67-125-44-103.5-6-68v-54z", svgPathLeft: "M290 1078.96l-6-27.97-15 17.48-9.5 26.46-4 37.96c-3.167 19.47-9.5 58.92-9.5 60.92 0 1.99-10.667 25.46-16 36.95l-23 73.4-30 63.92-28.5 50.43L142 1429l25 4.99 6-4.99 67-124.84 44-103.36 6-67.91v-53.93z", view: "back" },
  'FDI': {force_right: 0, force_left: 0, name: 'FDI', nerf: 'Ulnar', root: 'C8-T1', svgPathRight: "M263 1155.5l25-35.5 4 9v15.5l-4 22-21.5 48-23.5 46-19.5 29-17.5 27-7 14.5-26-3.5v-5l8.5-20 24.5-61 10.5-18 13.5-23 33-45z", svgPathLeft: "M1095 1153.5l-25-35.5-4 9v15.5l4 22 21.5 48 23.5 46 19.5 29 17.5 27 7 14.5 26-3.5v-5l-8.5-20-24.5-61-10.5-18-13.5-23-33-45z", view: "front" },
  'APB': {force_right: 0, force_left: 0, name: 'APB', nerf: 'Med Nerve', root: 'C8-T1', svgPathRight: "M53.5 1420c20.333-13 62.2-39.6 67-42l23.5 7.5-8 11-4.5 23.5-15.5 22.5-42.5 7.5-32 4.5L10 1461l-6.5-6.5 6.5-12 43.5-22.5z", svgPathLeft: "M1303.5 1421c-20.33-13-62.2-39.6-67-42l-23.5 7.5 8 11 4.5 23.5 15.5 22.5 42.5 7.5 32 4.5 31.5 6.5 7-11-7-7.5-43.5-22.5z", view: "front" },
  'Psoas': {force_right: 0, force_left: 0, name: 'Psoas', nerf: 'Lx plexus & femoral', root: 'Lx plexus, L2', svgPathRight: "M616 1171l61.5-28.5v76c-26.975 20.01-40.965 34.72-62 73-9.728 28.39-19.728 59.09-19 79 .728 19.91-33.291 78.72-34 73l-22 51-5-6.5 9-73c12.843-20.48 20.482-31.37 28-59 .65-11.83 2.823-34.79 8-87.5 7.09-48.45 14.308-70.65 35.5-97.5z", svgPathLeft: "M740.5 1171.5L679 1143v76c26.975 20.01 40.965 34.72 62 73 9.728 28.39 19.728 59.09 19 79-.728 19.91 33.291 78.72 34 73l22 51 5-6.5-9-73c-12.843-20.48-20.482-31.37-28-59-.65-11.83-2.823-34.79-8-87.5-7.09-48.45-14.308-70.65-35.5-97.5z", view: "front" },
  'Add long': {force_right: 0, force_left: 0, name: 'Add long', nerf: 'Obt nerve', root: 'L2-3', svgPathRight: "M565 1558.5l33.5-75 33.5 34v16.5l-13 79-25 73-29-94v-33.5z", svgPathLeft: "M793 1558.19L759.5 1483l-33.5 34.08v16.54l13 79.2 25 73.18 29-94.23v-33.58z", view: "front" },
  'Quad': {force_right: 0, force_left: 0, name: 'Quad', nerf: 'Femoral nerve', root: 'L3-4', svgPathRight: "M441.5 1506.5L478 1409l10 20c1 23.17 4.3 72.3 9.5 83.5 5.2 11.2 16.5 64.33 21.5 89.5l37.5 85.5c6.167 21 19.2 64.2 22 69 2.8 4.8 11.5 22 15.5 30v121L571 2017l-20 15.5-32 8-5 33.5-19.5 47.5-24.5-34-13.5-13.5-7.5-33.5V2026l-7.5-32-19-91-10.5-116.5-9-99 9-85.5 29.5-95.5z", svgPathLeft: "M918.5 1506.5L882 1409l-10 20c-1 23.17-4.3 72.3-9.5 83.5-5.2 11.2-16.5 64.33-21.5 89.5l-37.5 85.5c-6.167 21-19.2 64.2-22 69-2.8 4.8-11.5 22-15.5 30v121l23 109.5 20 15.5 32 8 5 33.5 19.5 46 24.5-34 13.5-12 7.5-33.5V2026l7.5-32 19-91 10.5-116.5 9-99-9-85.5-29.5-95.5z", view: "front" },
  'Tib ant': {force_right: 0, force_left: 0, name: 'Tib ant', nerf: 'Deep per nerve', root: 'L5', svgPathRight: "M443.5 2184l-11.5-15-26 113.5v55l4.5 55 10.5 79 7.5 4.5 2.5-17.5 5.5-77 5-69 2-128.5z", svgPathLeft: "M915 2184l11.5-15 26 113.5v55l-4.5 55-10.5 79-7.5 4.5-2.5-17.5-5.5-77-5-69-2-128.5z", view: "front" },
  'PL': {force_right: 0, force_left: 0, name: 'PL', nerf: 'Sup per nerve', root: 'L5', svgPathRight: "M946 2191.5V2158l3.5-6 6 6 11.5 11 20 12 10.5 6.5 5.5 18.5 11 54.5 9 54.5-2.5 55.5v20l2.5 34-4.5 35.5-4.5 27-5.5 25.5-4 35.5-3.5 46v86l-3.5 11.5-10.5 7.5-8 7v-53.5l4-80.5v-66l-4-46-3.5-27-8.5-32.5v-30l-4.5-47.5-4.5-48-6-38-6-45.5z", svgPathLeft: "M468 2196.5V2163l-3.5-6-6 6-11.5 11-20 12-10.5 6.5-5.5 18.5-11 54.5-9 54.5 2.5 55.5v20l-2.5 34 4.5 35.5 4.5 27 5.5 25.5 4 35.5 3.5 46v86l3.5 11.5 10.5 7.5 8 7v-53.5l-4-80.5v-66l4-46 3.5-27 8.5-32.5v-30l4.5-47.5 4.5-48 6-38 6-45.5z", view: "back" },
  'Tib post': {force_right: 0, force_left: 0, name: 'Tib post', nerf: 'Tibial nerve', root: 'L5', svgPathRight: "M403.5 2167l-9.5-12-6 16-4.5 62.5L373 2298v65.5l10.5 65c2.833 18.83 8.8 57.4 10 61 1.5 4.5 7 61.5 7 65.5 0 3.2 2 17.33 3 24l9 20.5 11 30.5v-60l-6.5-68-10.5-70-6-55.5-2-22.5v-56l2-26.5 3-19.5 9-34v-17l-4-16-5-18z", svgPathLeft: "M954 2166l9.5-12 6 16 4.5 62.5 10.5 64.5v65.5l-10.5 65c-2.833 18.83-8.8 57.4-10 61-1.5 4.5-7 61.5-7 65.5 0 3.2-2 17.33-3 24l-9 20.5-11 30.5v-60l6.5-68 10.5-70 6-55.5 2-22.5v-56l-2-26.5-3-19.5-9-34v-17l4-16 5-18z", view: "front" },
  'Ischios': {force_right: 0, force_left: 0, name: 'Ischios', nerf: 'Static nerve', root: 'L5-S1', svgPathRight: "M901 1679.5l-83.5-46.5-4.5 3c-1.333 12.83-4 39.5-4 43.5s-3 20.33-4.5 28l4.5 82-4.5 46 4.5 81.5c3.5 18.5 10.7 56.6 11.5 61 1 5.5 8 64 8 66.5 0 2 9.333 40.5 14 59.5l15.5 64.5 5.5 6.5 18.5-34 16.5-41.5 4-37 11 14.5 18 27 29 47 13.5 17.5 23.5 16.5-8.5-53-9-69.5-10.5-43.5-25-86-35-180.5-8.5-73z", svgPathLeft: "M512.5 1679.5L596 1633l4.5 3c1.333 12.83 4 39.5 4 43.5s3 20.33 4.5 28l-4.5 82 4.5 46-4.5 81.5c-3.5 18.5-10.7 56.6-11.5 61-1 5.5-8 64-8 66.5 0 2-9.333 40.5-14 59.5l-15.5 64.5-5.5 6.5-18.5-34-16.5-41.5-4-37-11 14.5-18 27-29 47-13.5 17.5L416 2185l8.5-53 9-69.5L444 2019l25-86 35-180.5 8.5-73z", view: "back" },
  'Glut med': {force_right: 0, force_left: 0, name: 'Glut med', nerf: 'Slup glut nerve', root: 'L5', svgPathRight: "M835 1233.5l-37 13-5.5 15.5-5 41.5H829l25.5 4.5 25 10.5L906 1338l56 59.5V1380l-22-76.5-27-34-48.5-23-29.5-13z", svgPathLeft: "M578 1233l37 13 5.5 15.5 5 41.5H584l-25.5 4.5-25 10.5-26.5 19.5-56 59.5v-17.5l22-76.5 27-34 48.5-23 29.5-13z", view: "back" },
  'Gastrocs': {force_right: 0, force_left: 0, name: 'Gastrocs', nerf: 'Tibial nerve', root: 'S1', svgPathRight: "M935.5 2177l-39.5-54.5-11 20c-4.167 7.33-12.6 22.3-13 23.5-.4 1.2-10.5 21.5-15.5 31.5l5 81.5 2.5 37.5 13 52.5 22 46 16 19 4.5 19 17.5 69.5 6.5 29.5c.833 9.5 2.5 29.9 2.5 35.5 0 5.6 1 19 1.5 25v58L946 2700l-5 33-2.5 22.5-3.5 20-4 12.5-3 10.5v16l7 10.5c3.167 2 9.9 6 11.5 6 1.6 0 8.667 1.66 12 2.5h10c5.833-1.34 18-4.1 20-4.5 2-.4 6.5-2.84 8.5-4v-17.5l-11-28-6-24-2.5-33-1.5-28V2677l4-43v-123l-4-58-9.5-45-6.5-19.5v-36l-3.5-28-13-106.5-8-41z", svgPathLeft: "M477.5 2176.5L517 2122l11 20c4.167 7.33 12.6 22.3 13 23.5.4 1.2 10.5 21.5 15.5 31.5l-5 81.5-2.5 37.5-13 52.5-22 46-16 19-4.5 19L476 2522l-6.5 29.5c-.833 9.5-2.5 29.9-2.5 35.5 0 5.6-1 19-1.5 25v58l1.5 29.5 5 33 2.5 22.5 3.5 20 4 12.5 3 10.5v16l-7 10.5c-3.167 2-9.9 6-11.5 6-1.6 0-8.667 1.67-12 2.5h-10c-5.833-1.33-18-4.1-20-4.5-2-.4-6.5-2.83-8.5-4V2807l11-28 6-24 2.5-33 1.5-28v-17.5l-4-43v-123l4-58 9.5-45 6.5-19.5v-36l3.5-28 13-106.5 8-41z", view: "back" },
  'Glut max': {force_right: 0, force_left: 0, name: 'Glut max', nerf: 'Inf glut nerve', root: 'S1', svgPathRight: "M762 1386l29-78h24.5l22 3 23 4 20.5 7.5 17.5 10.5 59 69.5v24L943 1456l-14 36v42l-4 74 4 79-121.5-70-50-42-18-32-8-43 8-44 11-24 11.5-46z", svgPathLeft: "M650.5 1386l-29-78H597l-22 3-23 4-20.5 7.5L514 1333l-59 69.5v24l14.5 29.5 14 36v42l4 74-4 79 121.5-70 50-42 18-32 8-43-8-44-11-24-11.5-46z", view: "back" },
};

export default muscles;
