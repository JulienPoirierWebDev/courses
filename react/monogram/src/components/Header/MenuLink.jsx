function MenuLink({ url, text }) {
  return (
    <>
      <a
        style={{
          paddingInline: "10px",
          textDecoration: "none",
          color: "black",
        }}
        href={url}
      >
        {text.toUpperCase()}
      </a>
    </>
  );
}

export default MenuLink;
