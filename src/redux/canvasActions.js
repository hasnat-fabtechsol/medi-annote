// actions.js
export const updateCanvas = (canvasState) => ({
    type: 'UPDATE_CANVAS',
    payload: canvasState,
  });


  
  // reducers.js
  const initialState = {
    canvasState: {}, // Initial state for your canvas
  };
  
  const canvasReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_CANVAS':
        
        return {

          ...state,
          canvasState: action.payload,
        };
      default:
        return state;
    }
  };

 

  
  export default canvasReducer;
  
 
  