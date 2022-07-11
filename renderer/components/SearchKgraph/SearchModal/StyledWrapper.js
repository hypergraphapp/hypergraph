import styled from 'styled-components';

const Wrapper = styled.div`
  &.modal--animate-out{
    animation: fade-out 0.5s forwards cubic-bezier(.19,1,.22,1);

    .kgraph-modal-card {
      animation: fade-and-slide-out-from-top .50s forwards cubic-bezier(.19,1,.22,1);
    }
  }

  &.kgraph-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
    overflow-y: auto;
    -ms-flex-pack: center;
    justify-content: center;
    z-index: 1003;
  }

  .kgraph-modal-card {
    -webkit-animation-duration: .85s;
    animation-duration: .85s;
    -webkit-animation-delay: .1s;
    animation-delay: .1s;
    background: var(--color-background-top);
    border-radius: var(--border-radius);
    position: relative;
    z-index: 1003;
    max-width: calc(100% - var(--spacing-base-unit));
    -webkit-box-shadow: var(--box-shadow-base);
    box-shadow: var(--box-shadow-base);
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    will-change: opacity,transform;
    -ms-flex-positive: 0;
    flex-grow: 0;
    margin: 3vh 10vw;
    margin-top: 50px;

    &.modal-sm {
      min-width: 300px;
    }

    &.modal-md {
      min-width: 500px;
    }

    &.modal-lg {
      min-width: 800px;
    }

    &.modal-xl {
      min-width: 1140px;
    }

    animation: fade-and-slide-in-from-top .50s forwards cubic-bezier(.19,1,.22,1);
  }

  .kgraph-modal-content {
    flex-grow: 1;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 3px 7px rgb(0 0 0 / 7%);
  }

  .kgraph-modal-backdrop {
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    position: fixed;
    will-change: opacity;
    background: transparent;

    &:before{
      content: "";
      height: 100%;
      width: 100%;
      left: 0;
      opacity: .5;
      top: 0;
      background: black;
      position: fixed;
    }

    animation: fade-in .1s forwards cubic-bezier(.19,1,.22,1);
  }
`;

export default Wrapper;
