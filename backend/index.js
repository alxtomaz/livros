const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const livroModel = require('./src/module/livros.model');

app.get('/livros', async (req, res) => {
    const livros = await livroModel.find({});
    return res.status(200).json(livros);
});

app.get('/livros/edicao/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const livro = await livroModel.findOne({id: id})
        return res.status(200).json(livro)
    } catch (error) {
        return res.status(500).json({mensagem: "Livro não encontrado", error})
    }
})

app.post('/livros', async (req, res) => {
    const livros = await livroModel.create(req.body);
    return res.status(200).json("Livro criado com sucesso");
});

app.put('/livros/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const livroAtualizado = await livroModel.findOneAndUpdate({id: id}, req.body, { new: true });
        return res.status(200).json({mensagem: 'Livro atualizado com sucesso', livroAtualizado});
        
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro ao atualizar o livro', error });
    }
});

app.delete('/livros/:id', async (req, res) => {
    const { id } = req.params;  
    try {
        const deletarLivro = await livroModel.findOneAndDelete({id: id})
        return res.status(200).json({mensagem: "Livro deletado com sucesso", deletarLivro})
    } catch (error) {
        res.status(500).json({response:"Erro ao deletar o livro", error});        
    }
})


app.listen(8081, () => {
    console.log("Servidor funcionando na porta 8081");
  });
  