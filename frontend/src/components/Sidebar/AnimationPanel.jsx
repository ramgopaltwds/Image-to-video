function AnimationPanel({
  onSelectAnimation
}) {
  return (
    <div>
      <h3>Animations</h3>

      <button
        onClick={() =>
          onSelectAnimation("fade")
        }
      >
        Fade
      </button>

      <button
        onClick={() =>
          onSelectAnimation("zoom")
        }
      >
        Zoom
      </button>

      <button
        onClick={() =>
          onSelectAnimation("bounce")
        }
      >
        Bounce
      </button>
    </div>
  );
}

export default AnimationPanel;