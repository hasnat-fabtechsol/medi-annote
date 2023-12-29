// actions.js
export const updateCanvas = (canvasState) => ({
    type: 'UPDATE_CANVAS',
    payload: canvasState,
  });

   // Function to get canvas state from local storage
const getCanvasStateFromLocalStorage = () => {
  const storedCanvasState = localStorage.getItem('canvasState');
  return storedCanvasState ? JSON.parse(storedCanvasState) : {};
};
  
  // reducers.js
  const initialState = {
    canvasState: getCanvasStateFromLocalStorage(), // Initial state for your canvas
  };
  
  const canvasReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_CANVAS':
        localStorage.setItem('canvasState', JSON.stringify(action.payload));
        return {

          ...state,
          canvasState: action.payload,
        };
      default:
        return state;
    }
  };

 

  
  export default canvasReducer;
  
 
  