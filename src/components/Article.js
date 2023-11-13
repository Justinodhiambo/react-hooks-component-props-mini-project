// App.js or another higher-level component
import React, { Component } from 'react';

class App extends Component {
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    return (
      <div className="App">
        {/* ... rest of the components */}
      </div>
    );
  }
}

export default App;
