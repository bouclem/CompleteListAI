const architectures = [
  {
    name: "Transformer",
    year: 2017,
    tags: ["attention", "NLP", "sequence", "self-attention"],
    description:
      "Self-attention-based architecture that replaces recurrence entirely. Uses multi-head attention and positional encoding to process sequences in parallel.",
    authors: "Vaswani et al.",
    paper: "https://arxiv.org/abs/1706.03762",
  },
  {
    name: "CNN (Convolutional Neural Network)",
    year: 1989,
    tags: ["vision", "convolution", "image", "spatial"],
    description:
      "Uses convolutional layers to detect spatial hierarchies in images. Locally connected neurons share weights, enabling translation-invariant feature extraction.",
    authors: "LeCun et al.",
    paper: "http://yann.lecun.com/exdb/publis/pdf/lecun-89.pdf",
  },
  {
    name: "RNN (Recurrent Neural Network)",
    year: 1986,
    tags: ["sequence", "recurrent", "temporal"],
    description:
      "Processes sequences by maintaining a hidden state passed from one timestep to the next. Enables modeling of temporal dependencies in variable-length sequences.",
    authors: "Rumelhart, Hinton, Williams",
    paper: "https://www.nature.com/articles/323533a0",
  },
  {
    name: "LSTM (Long Short-Term Memory)",
    year: 1997,
    tags: ["sequence", "recurrent", "memory", "gates", "temporal"],
    description:
      "RNN variant with gating mechanisms (input, forget, output gates) that regulate information flow, solving the vanishing gradient problem for long sequences.",
    authors: "Hochreiter & Schmidhuber",
    paper: "https://www.bioinf.jku.at/publications/older/2604.pdf",
  },
];
