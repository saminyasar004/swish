import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryProps } from "@/components/common/Header";

interface PostJobState {
  selectedCategory: CategoryProps | null;
  activeStep: number;
  formData: {
    heading: string;
    description: string;
    category: number;
    email: string;
    first_name: string;
    surname: string;
    phone: string;
    mission_address: string;
    area: string;
    postal_code: number;
    through_swish_or_telephone: boolean;
    site_images: File[];
  };
}

const initialState: PostJobState = {
  selectedCategory: null,
  activeStep: 0,
  formData: {
    heading: "",
    description: "",
    category: 0,
    email: "",
    first_name: "",
    surname: "",
    phone: "",
    mission_address: "",
    area: "",
    postal_code: 0,
    through_swish_or_telephone: true,
    site_images: [],
  },
};

const postJobSlice = createSlice({
  name: "postJob",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<CategoryProps | null>) => {
      state.selectedCategory = action.payload;
      if (action.payload) {
        state.formData.category = action.payload.id;
      }
    },
    setActiveStep: (state, action: PayloadAction<number>) => {
      state.activeStep = action.payload;
    },
    updateFormData: (state, action: PayloadAction<Partial<PostJobState["formData"]>>) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetForm: (state) => {
      state.selectedCategory = null;
      state.activeStep = 0;
      state.formData = initialState.formData;
    },
  },
});

export const { setCategory, setActiveStep, updateFormData, resetForm } = postJobSlice.actions;
export default postJobSlice.reducer;