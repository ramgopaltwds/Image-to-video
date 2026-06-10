function StickerPanel({
  onSelectSticker
}) {
  const stickers = [
    "/assets/stickers/star.jpg",
    "/assets/stickers/heart.png",
    "/assets/stickers/cake.jpg",
    "/assets/stickers/ballon.jpg"
  ];

 const handleClick = (sticker) => {
    if (typeof onSelectSticker === "function") {
      onSelectSticker(sticker);
    } else {
      console.warn("onSelectSticker is missing");
    }
  };


  return (
    <div>
      <h3>Stickers</h3>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap"
        }}
      >
        {stickers.map((sticker) => (
          <img
            key={sticker}
            src={sticker}
            width="70"
            height="70"
            alt="sticker"
            style={{
              cursor: "pointer"
            }}
            onClick={() =>
              onSelectSticker(sticker)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default StickerPanel;