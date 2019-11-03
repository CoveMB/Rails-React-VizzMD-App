import * as actionsType from './actionsTypes';

export function setTraitment(traitment) {
  return {
    type: actionsType.SET_TRAITMENT,
    payload: traitment
  };
}

export function flipBody(face) {
  return {
    type: actionsType.FLIP_BODY,
    payload: face
  };
}

export function selectMuscle(muscleName) {
  return {
    type: actionsType.MUSCLE_SELECTED,
    payload: muscleName
  };
}

export function changeMuscleForce(force, muscleInfo, musclesState) {
  const [name, side] = muscleInfo.split("-");
  const newMuscles = musclesState.map((muscleObj) => {
    if (muscleObj.name === name) {
      if (side === "right") {
        return {
          ...muscleObj,
          force_right: Number(force)
        };
      } if (side === "left") {
        return {
          ...muscleObj,
          force_left: Number(force)
        };
      }
    }
    return muscleObj;
  });

  return {
    type: actionsType.MUSCLE_FORCE_CHANGED,
    payload: newMuscles
  };
}
