import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  properties: [],
  status: 'idle',
  error: null,
}

export const fetchProperties = createAsyncThunk('properties/fetchProperties', async (filters) => {
  const response = await axios
  .get(process.env.REACT_APP_API_PATH)
  .catch((err) => {
    console.log("Err", err);
  });
  //Filters
  let finalSearch;
  const allProperties = response.data;
  if(filters.destination === 'All no filter') {
    finalSearch = allProperties;
  } else {
    let destinationFiltered;
    if(filters.destination === 'All') {
      destinationFiltered = allProperties;
    } else {
      destinationFiltered = allProperties.filter(function(property) {
        return property.location.includes(filters.destination);
      })
    }
    const optionFiltered = destinationFiltered.filter(function(property) {
      return property.type === filters.optionType; 
    })
    const priceFiltered = optionFiltered.filter(function(property) {
      return property.price >= filters.fromPrice && property.price <= filters.toPrice; 
    })
    finalSearch = priceFiltered;
  }
  return finalSearch;
})

const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  extraReducers(builder) {
    builder
    .addCase(fetchProperties.pending, (state, action) => {
      state.status = 'loading';
    })
    .addCase(fetchProperties.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.properties = state.properties.concat(action.payload)
    })
    .addCase(fetchProperties.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
})

export default propertiesSlice.reducer

export const selectAllProperties = (state) => state.properties

export const selectPropertyById = (state, propertyId) =>
  state.properties.find((property) => property.id === propertyId)