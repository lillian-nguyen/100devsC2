const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const canesCombos = {
    "box combo": {
        'name': 'The Box Combo',
        'includes': ['chicken fingers (4)', 'crinkle-cut fries', 'cane\'s sauce (1)', 'Texas toast', 'coleslaw', 'regular fountain drink/tea (22 oz)'],
        'coverImg': 'https://images.prismic.io/raisingcanes/NjcwNWUzYzctNzM5My00MmFkLWI1N2EtM2FiZThiYjdiMDA1_363886a1-6d76-4abd-99eb-9e6609c0c247_box_combo_new.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C2000%2C2000&w=512&h=512',
    },
    "caniac combo": {
        'name': 'The Caniac Combo',
        'includes': ['chicken fingers (6)', 'crinkle-cut fries', 'cane\'s sauce (2)', 'Texas toast', 'coleslaw', 'regular fountain drink/tea (32 oz)'],
        'coverImg': 'https://images.prismic.io/raisingcanes/NmZkYTkyNDEtNGU5MS00MmJlLTgwNzAtNmQ5MDZlNmM1ODdm_aff16568-5bb8-47f9-a236-1a0ae0097382_caniac_combo.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C2000%2C2000&w=512&h=512',
    },
    "3 finger combo": {
        'name': 'The 3 Finger Combo',
        'includes': ['chicken fingers (3)', 'crinkle-cut fries', 'cane\'s sauce (1)', 'Texas toast', 'coleslaw', 'regular fountain drink/tea (22 oz)'],
        'coverImg': 'https://images.prismic.io/raisingcanes/YzA3ZDIwYmUtMzAwYy00YTRkLTk1NjAtMWQ3ZGZhMWE2YzBk_d643d63f-1766-4434-b936-ae6aed6ed7a5_3finger_combo_new.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C2000%2C2000&w=512&h=512',
    },
    "sandwich combo": {
        'name': 'The Sandwich Combo',
        'includes': ['chicken fingers (3)', 'cane\'s sauce (1)', 'lettuce', 'toasted bun', 'regular fountain drink/tea (22 oz)'],
        'coverImg': 'https://images.prismic.io/raisingcanes/NWY1YTA5ZGItMjAzYi00MjI5LTllNzgtOTk5NjJlMWExNzNh_6313f8a3-cb33-4cb4-ade0-636558cc9622_sandwich_combo_new.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C2000%2C2000&w=512&h=512',
    },
    "kids combo": {
        'name': 'The Kids Combo',
        'includes': ['chicken fingers (2)', 'cane\'s sauce (1)', 'crinkle-cut fries', 'kid\'s size drink (12 oz)'],
        'coverImg': 'https://images.prismic.io/raisingcanes/ZjZiMmJkYjUtZmJkZS00Y2ZiLTkxNDAtMWE3NzIyODFjZmQw_04bf7586-877d-4c5b-b358-b4bac61fb6c1_kidscombo_2022.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C2000%2C2000&w=512&h=512',
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:choice', (req, res) => {
    const comboChoice = req.params.choice.toLowerCase()

    if (canesCombos[comboChoice]) {
        res.json(canesCombos[comboChoice])
    } else {
        res.json(bookshelf['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})