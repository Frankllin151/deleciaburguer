-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 22/07/2022 às 20:26
-- Versão do servidor: 10.4.24-MariaDB
-- Versão do PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `deleciaburguer`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `bebidas`
--

CREATE TABLE `bebidas` (
  `id` int(10) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `price` float(89,8) NOT NULL,
  `img` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `bebidas`
--

INSERT INTO `bebidas` (`id`, `nome`, `price`, `img`) VALUES
(1, 'Água Mineral 500ml', 2.00000000, '????\0JFIF\0\0\0\0\0\0??\0<CREATOR: gd-jpeg v1.0 (using IJG JPEG v62), quality = 100\n??\0C\0');

-- --------------------------------------------------------

--
-- Estrutura para tabela `cachorroquente`
--

CREATE TABLE `cachorroquente` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `cachorroquente`
--

INSERT INTO `cachorroquente` (`id`, `nome`, `description`) VALUES
(1, 'Cachorro Quente de Frango', 'Pão, Salsicha, Frango, Milho e Batata Palha');

-- --------------------------------------------------------

--
-- Estrutura para tabela `foto`
--

CREATE TABLE `foto` (
  `id` int(11) NOT NULL,
  `filename` mediumblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura para tabela `pateis`
--

CREATE TABLE `pateis` (
  `id` int(10) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `img` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `pateis`
--

INSERT INTO `pateis` (`id`, `nome`, `description`, `img`) VALUES
(1, 'Queijo', 'Queijo ', './images/pastel.webp');

-- --------------------------------------------------------

--
-- Estrutura para tabela `pizza`
--

CREATE TABLE `pizza` (
  `id` int(10) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `descricao` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `pizza`
--

INSERT INTO `pizza` (`id`, `nome`, `descricao`) VALUES
(1, 'Mussarela', 'Molho: Mussarela, Tomate,Azeitona e Orégano'),
(2, 'Mista', 'Molho: Mussarela, Apresuntado,Tomate e Orégano'),
(3, 'Frango C/Catupiry', 'Molho: Mussarela, Frango ,Catupiry, Milho e Orégano');

-- --------------------------------------------------------

--
-- Estrutura para tabela `sanduiches`
--

CREATE TABLE `sanduiches` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `price` float(85,0) NOT NULL,
  `img` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `sanduiches`
--

INSERT INTO `sanduiches` (`id`, `nome`, `description`, `price`, `img`) VALUES
(1, 'Bauru Especial', ' Pão,Alface, Tomate,Ovo,Hambúrguer,Molho Rosé,Molho Cheddar,Queijo e Apresuntado', 7, './images/bigburguer.jfif');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `bebidas`
--
ALTER TABLE `bebidas`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `cachorroquente`
--
ALTER TABLE `cachorroquente`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `foto`
--
ALTER TABLE `foto`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `pateis`
--
ALTER TABLE `pateis`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `pizza`
--
ALTER TABLE `pizza`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `sanduiches`
--
ALTER TABLE `sanduiches`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `bebidas`
--
ALTER TABLE `bebidas`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `cachorroquente`
--
ALTER TABLE `cachorroquente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `foto`
--
ALTER TABLE `foto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `pateis`
--
ALTER TABLE `pateis`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `pizza`
--
ALTER TABLE `pizza`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `sanduiches`
--
ALTER TABLE `sanduiches`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
