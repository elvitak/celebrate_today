const RichText = {
  types: {
    image: ({ value }) => (
      <img class="width={1000} height={800}" src={value.asset?.url} />
    ),
  },
};

export default RichText;
