import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Plan } from '../../domain/plan.interface';
import type { PersonType } from '../../domain/person-type.type';

interface PlanState {
  plans: Plan[];
  selectedPlan: Plan | null;
  person: PersonType | null;
}

const initialState: PlanState = {
  plans: [],
  selectedPlan: null,
  person: null,
};

const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    setPlans: (state, action: PayloadAction<Plan[]>) => {
      state.plans = action.payload;
    },
    setSelectedPlan: (state, action: PayloadAction<Plan>) => {
      state.selectedPlan = action.payload;
    },

    resetSelectedPlan: (state) => {
      state.selectedPlan = null;
    },
  },
});

export const planReducer = planSlice.reducer;

export const { setSelectedPlan, resetSelectedPlan, setPlans } = planSlice.actions;
