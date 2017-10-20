import React from "react";
import PropTypes from "prop-types";

class ResizeListener extends React.Component {
  iframeStyles() {
    return {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      visibility: this.props.debug ? "visible" : "hidden",
      border: "none",
      outline: "4px dashed crimson",
      height: "100%",
      width: "100%"
    };
  }

  handleResize() {
    const resizeUpdateObject = {
      height: this.iframe.scrollHeight,
      width: this.iframe.scrollWidth
    };

    if (this.props.debug) {
      console.log(resizeUpdateObject);
    }

    this.props.onResize(resizeUpdateObject);
  }

  componentDidMount() {
    this.iframe.contentWindow.addEventListener(
      "resize",
      this.handleResize.bind(this)
    );
  }

  componentWillUnmount() {
    this.iframe.contentWindow.removeEventListener(
      "resize",
      this.handleResize.bind(this)
    );
  }

  render() {
    return (
      <iframe
        title={Math.random().toString()}
        ref={iframe => (this.iframe = iframe)}
        style={this.iframeStyles()}
      />
    );
  }
}

ResizeListener.propTypes = {
  onResize: PropTypes.func,
  debug: PropTypes.bool
};

ResizeListener.defaultProps = {
  onResize: () => {},
  debug: false
};

export { ResizeListener };
