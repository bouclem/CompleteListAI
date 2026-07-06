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
  {
    name: "GNN (Graph Neural Network)",
    year: 2009,
    tags: ["graph", "message-passing", "relational", "non-euclidean"],
    description:
      "Neural network that operates on graph-structured data. Nodes aggregate features from neighbors through message passing, enabling learning on non-Euclidean domains.",
    authors: "Scarselli et al.",
    paper: "https://ieeexplore.ieee.org/document/4700287",
  },
  {
    name: "RWKV",
    year: 2023,
    tags: ["sequence", "recurrent", "attention-free", "linear", "parallel-trainable"],
    description:
      "RNN architecture that can be trained in parallel like a Transformer but runs as an RNN during inference. Combines transformer-level performance with O(1) inference cost per token.",
    authors: "Bo Peng",
    paper: "https://arxiv.org/abs/2305.13048",
  },
  {
    name: "Perceptron",
    year: 1958,
    tags: ["foundational", "classification", "linear", "binary"],
    description:
      "The simplest neural network unit — a single linear classifier that maps inputs to a binary output using a weighted sum and threshold activation. The building block of all neural networks.",
    authors: "Frank Rosenblatt",
    paper: "https://psycnet.apa.org/record/1959-09742-001",
  },
  {
    name: "MLP (Multi-Layer Perceptron)",
    year: 1986,
    tags: ["foundational", "feedforward", "dense", "universal-approximator"],
    description:
      "Stacked layers of perceptrons with non-linear activation functions, trained via backpropagation. A universal function approximator and the simplest deep network architecture.",
    authors: "Rumelhart, Hinton, Williams",
    paper: "https://www.nature.com/articles/323533a0",
  },
  {
    name: "GAN (Generative Adversarial Network)",
    year: 2014,
    tags: ["generative", "adversarial", "image-generation", "implicit"],
    description:
      "Two networks — a generator and a discriminator — trained in opposition. The generator creates fake samples, the discriminator tries to detect them. The equilibrium produces realistic synthetic data.",
    authors: "Ian Goodfellow et al.",
    paper: "https://arxiv.org/abs/1406.2661",
  },
  {
    name: "FNN (Feedforward Neural Network)",
    year: 1958,
    tags: ["foundational", "feedforward", "acyclic"],
    description:
      "The simplest neural network topology — data flows in one direction from input through hidden layers to output, with no cycles or feedback connections. MLPs are a subset of FNNs.",
    authors: "Rosenblatt, Werbos, Rumelhart et al.",
    paper: "https://en.wikipedia.org/wiki/Feedforward_neural_network",
  },
  {
    name: "Mamba",
    year: 2023,
    tags: ["sequence", "state-space", "selective", "attention-free", "linear"],
    description:
      "Selective state space model that lets SSM parameters be input-dependent, enabling content-based reasoning. Achieves 5x higher throughput than Transformers with linear scaling in sequence length.",
    authors: "Albert Gu, Tri Dao",
    paper: "https://arxiv.org/abs/2312.00752",
  },
  {
    name: "SNN (Spiking Neural Network)",
    year: 1997,
    tags: ["neuromorphic", "biological", "spiking", "event-driven", "energy-efficient"],
    description:
      "Biologically inspired network where neurons communicate via discrete spikes over time, rather than continuous activation values. Closer to how real brains work — enables energy-efficient neuromorphic computing.",
    authors: "Maass et al.",
    paper: "https://www.sciencedirect.com/science/article/pii/S0893608097000467",
  },
];
