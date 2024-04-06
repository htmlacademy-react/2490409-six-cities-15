import {Action} from '@reduxjs/toolkit';

const extractActionsTypes = (actions: Array<Action<string>>) => actions.map(({ type }) => type);

export {
  extractActionsTypes,
};
