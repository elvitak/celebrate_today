const RichText = {
  types: {
    image: ({ value }) => (
      <img className="w-72 h-auto" src={value.asset?.url} />
    ),
  },
};

export default RichText;
