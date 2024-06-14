import React from 'react';

const withBackgroundColor = (WrappedComponent, color) => {
  return (props) => {
    return (
      <div style={{ backgroundColor: color }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

const TextComponent = ({ text }) => {
  return <p>{text}</p>;
};

const ColoredTextComponent1 = withBackgroundColor(TextComponent, 'lightblue');
const ColoredTextComponent2 = withBackgroundColor(TextComponent, 'lightgreen');
const ColoredTextComponent3 = withBackgroundColor(TextComponent, 'lightpink');

const HigherOrderComponent = () => {
  return (
    <div style={{border: '1px solid red'}}>
        <h1>Higher Order Component</h1>
        <ColoredTextComponent1 text="Component 1" />
        <ColoredTextComponent2 text="Component 2" />
        <ColoredTextComponent3 text="Component 3" />
    </div>
);
};

export default HigherOrderComponent;
