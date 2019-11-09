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

export function selectElement(muscleName) {
  return {
    type: actionsType.ELEMENT_SELECTED,
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

export function changeReflex(reflex, reflexInfo, reflexesState) {
  const [name, side] = reflexInfo.split("-");
  const newReflexes = reflexesState.map((reflexObj) => {
    if (reflexObj.name === name) {
      if (side === "right") {
        return {
          ...reflexObj,
          reflex_right: Number(reflex)
        };
      } if (side === "left") {
        return {
          ...reflexObj,
          reflex_left: Number(reflex)
        };
      }
    }
    return reflexObj;
  });

  return {
    type: actionsType.REFLEX_CHANGED,
    payload: newReflexes
  };
}
