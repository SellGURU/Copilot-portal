import Api from "./Api";

const useMoch = () => {
  Api.post('/get_additional_data',
{
    "additional_data": {
        "Age": "int",
        "Gender": [
            "Male",
            "Female"
        ],
        "Answer Type": [
            "With example",
            "Without example"
        ],
        "Sleep States": [
            "Good",
            "Bad",
            "Restless",
            "Average",
            "Excellent",
            "Poor",
            "Interrupted"
        ],
        "Stress Levels": [
            "Low",
            "Moderate",
            "High",
            "Very High",
            "Extreme"
        ],
        "BMI Classification": [
            "Underweight",
            "Normal weight",
            "Overweight",
            "Obesity"
        ],
        "Medical Conditions": "str"
    }
}
  )
  Api.post('/flow',
{
    "answer": "I apologize, but as an AI language model, I don't have access to your personal information or the ability to keep track of it. I can provide general information and answer questions based on common knowledge and research, but I cannot provide personalized advice or recommendations. It's always best to consult with a healthcare professional or relevant specialist who can consider your specific circumstances and provide tailored advice.",
    "currentconverationid": 98244459039,
    "instanceid": "a7f53d15-f028-47b2-a220-7ffa6b2dd882",
    "message_state": true
} 
  )
  Api.post('/get_related_nodes_for_test',[
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "With some careful meal planning, and by eating a variety and balance of different vegetarian or vegan foods, vegetarian and vegan mums-to-be should be able to get all the nutrients that they and their baby need. A lot of the information below is also relevant before conception, to make sure the body’s nutrient stores are ready for pregnancy, and afterwards during breastfeeding. Like any healthy diet, you should make sure you include foods from the four main food groups: Plenty of starchy carbohydrates. Choose wholegrain or higher fibre options where possible, like wholewheat pasta, wholegrain breakfast cereals, brown rice, or potatoes with their skins, as fibre is an important part of a healthy diet and can help to prevent constipation (common in pregnancy). Plenty of fruit and vegetables, which can be fresh, frozen or tinned. Try to have five portions a day and aim for a variety of different types.",
            "percent": 0.8263776848378723
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "Protein is made up of amino acids, which are the building blocks of your body's cells – and of your baby's. Essential amino acids are those that the body cannot make itself and so are needed from the diet. Most vegans and vegetarians get enough protein from their diets. However, it is important to consume a range of different proteins to make sure you get enough of all the different essential amino acids. Soya is a particularly good source of protein for vegetarians and vegans as it contains a good range of essential amino acids.",
            "percent": 0.8203981187196433
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "A varied and balanced vegetarian diet should provide enough nutrients for you and your baby during pregnancy. But you might find it more difficult to get enough iron and vitamin B12. Talk to a midwife or doctor about how to make sure you're getting enough of these important nutrients. If you're vegan or you follow a restricted diet because of a food intolerance (for example, a gluten-free diet for coeliac disease) or for religious reasons, talk to a midwife or GP. Ask to be referred to a dietitian for advice on how to make sure you're getting all the nutrients you need for you and your baby.",
            "percent": 0.8193622185518005
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "Eat plenty of fruit and vegetables. Aim for at least 5 A DAY and make sure you eat a variety of types and colours! Base your meals on starchy carbohydrates, such as bread, rice, pasta or potatoes. Where possible, go for wholegrain varieties, and potatoes with skins, as these contain more fibre. Some breakfast cereals are fortified with several essential vitamins and minerals, including iron, vitamin B12 and riboflavin (check the label). Where possible, go for wholegrain varieties. Eat a range of foods containing plant protein. Good sources of essential amino acids for vegetarians include dairy foods and eggs, and sources suitable for both vegetarians and vegans include beans and other pulses, soya dairy alternatives, nuts, and tofu. Milk, cheese and yogurt are a good source of calcium, iodine, vitamin B12 and riboflavin if you are vegetarian. You should eat a moderate amount of these in your diet. Where possible, choose lower fat or reduced fat products, and those lower in sugar.",
            "percent": 0.8189107100252436
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "A healthy, balanced diet is also important when you are breastfeeding to help your baby get all the nutrients needed to grow. For vegetarian and vegan mums, the nutrients mentioned previously for pregnancy are things to still be aware of during breastfeeding.\n\n\n\n\n\nTop tips for vegetarian and vegan mums-to-be (British Nutrition Foundation)\n\nEat plenty of fruit and vegetables. Aim for at least 5 A DAY and make sure you eat a variety of types and colours!\n\nBase your meals on starchy carbohydrates, such as bread, rice, pasta or potatoes. Where possible, go for wholegrain varieties, and potatoes with skins, as these contain more fibre.\n\nSome breakfast cereals are fortified with several essential vitamins and minerals, including iron, vitamin B12 and riboflavin (check the label). Where possible, go for wholegrain varieties.\n\nEat a range of foods containing plant protein.",
            "percent": 0.8171799032805938
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "Eat plenty of fruit and vegetables. Aim for at least 5 A DAY and make sure you eat a variety of types and colours! Base your meals on starchy carbohydrates, such as bread, rice, pasta or potatoes. Where possible, go for wholegrain varieties, and potatoes with skins, as these contain more fibre. Some breakfast cereals are fortified with several essential vitamins and minerals, including iron, vitamin B12 and riboflavin (check the label). Where possible, go for wholegrain varieties. Eat a range of foods containing plant protein. Good sources of essential amino acids for vegetarians include dairy foods and eggs, and sources suitable for both vegetarians and vegans include beans and other pulses, soya dairy alternatives, nuts, and tofu. Milk, cheese and yogurt are a good source of calcium, iodine, vitamin B12 and riboflavin if you are vegetarian. You should eat a moderate amount of these in your diet. Where possible, choose lower fat or reduced fat products, and those lower in sugar.",
            "percent": 0.8284123178767608
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "With some careful meal planning, and by eating a variety and balance of different vegetarian or vegan foods, vegetarian and vegan mums-to-be should be able to get all the nutrients that they and their baby need. A lot of the information below is also relevant before conception, to make sure the body’s nutrient stores are ready for pregnancy, and afterwards during breastfeeding. Like any healthy diet, you should make sure you include foods from the four main food groups: Plenty of starchy carbohydrates. Choose wholegrain or higher fibre options where possible, like wholewheat pasta, wholegrain breakfast cereals, brown rice, or potatoes with their skins, as fibre is an important part of a healthy diet and can help to prevent constipation (common in pregnancy). Plenty of fruit and vegetables, which can be fresh, frozen or tinned. Try to have five portions a day and aim for a variety of different types.",
            "percent": 0.8256713339615865
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "A healthy, balanced diet is also important when you are breastfeeding to help your baby get all the nutrients needed to grow. For vegetarian and vegan mums, the nutrients mentioned previously for pregnancy are things to still be aware of during breastfeeding.\n\n\n\n\n\nTop tips for vegetarian and vegan mums-to-be (British Nutrition Foundation)\n\nEat plenty of fruit and vegetables. Aim for at least 5 A DAY and make sure you eat a variety of types and colours!\n\nBase your meals on starchy carbohydrates, such as bread, rice, pasta or potatoes. Where possible, go for wholegrain varieties, and potatoes with skins, as these contain more fibre.\n\nSome breakfast cereals are fortified with several essential vitamins and minerals, including iron, vitamin B12 and riboflavin (check the label). Where possible, go for wholegrain varieties.\n\nEat a range of foods containing plant protein.",
            "percent": 0.8242966093727837
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "A varied and balanced vegetarian diet should provide enough nutrients for you and your baby during pregnancy. But you might find it more difficult to get enough iron and vitamin B12. Talk to a midwife or doctor about how to make sure you're getting enough of these important nutrients. If you're vegan or you follow a restricted diet because of a food intolerance (for example, a gluten-free diet for coeliac disease) or for religious reasons, talk to a midwife or GP. Ask to be referred to a dietitian for advice on how to make sure you're getting all the nutrients you need for you and your baby.",
            "percent": 0.8231673763854903
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "If you're a vegan, you also need to make sure you get enough . This is because non-vegans get most of their calcium from dairy foods. Good sources of calcium for vegans include: dark green leafy vegetables pulses fortified unsweetened soya, pea and oat drinks brown and white bread calcium-set tofu sesame seeds and tahini dried fruit Talk to your midwife or doctor about how you can get all the nutrients you need for you and your baby.",
            "percent": 0.8210986158047363
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "Eat plenty of fruit and vegetables. Aim for at least 5 A DAY and make sure you eat a variety of types and colours! Base your meals on starchy carbohydrates, such as bread, rice, pasta or potatoes. Where possible, go for wholegrain varieties, and potatoes with skins, as these contain more fibre. Some breakfast cereals are fortified with several essential vitamins and minerals, including iron, vitamin B12 and riboflavin (check the label). Where possible, go for wholegrain varieties. Eat a range of foods containing plant protein. Good sources of essential amino acids for vegetarians include dairy foods and eggs, and sources suitable for both vegetarians and vegans include beans and other pulses, soya dairy alternatives, nuts, and tofu. Milk, cheese and yogurt are a good source of calcium, iodine, vitamin B12 and riboflavin if you are vegetarian. You should eat a moderate amount of these in your diet. Where possible, choose lower fat or reduced fat products, and those lower in sugar.",
            "percent": 0.8151342735493303
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "With some careful meal planning, and by eating a variety and balance of different vegetarian or vegan foods, vegetarian and vegan mums-to-be should be able to get all the nutrients that they and their baby need. A lot of the information below is also relevant before conception, to make sure the body’s nutrient stores are ready for pregnancy, and afterwards during breastfeeding. Like any healthy diet, you should make sure you include foods from the four main food groups: Plenty of starchy carbohydrates. Choose wholegrain or higher fibre options where possible, like wholewheat pasta, wholegrain breakfast cereals, brown rice, or potatoes with their skins, as fibre is an important part of a healthy diet and can help to prevent constipation (common in pregnancy). Plenty of fruit and vegetables, which can be fresh, frozen or tinned. Try to have five portions a day and aim for a variety of different types.",
            "percent": 0.8112936609305991
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "Good sources of  for vegetarians and vegans include: pulses dark green vegetables wholemeal bread and flour nuts fortified breakfast cereals (with added iron) dried fruit, such as apricots",
            "percent": 0.8106771109073233
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "Protein is made up of amino acids, which are the building blocks of your body's cells – and of your baby's. Essential amino acids are those that the body cannot make itself and so are needed from the diet. Most vegans and vegetarians get enough protein from their diets. However, it is important to consume a range of different proteins to make sure you get enough of all the different essential amino acids. Soya is a particularly good source of protein for vegetarians and vegans as it contains a good range of essential amino acids.",
            "percent": 0.8102483551630959
        }
    },
    {
        "Pregnancy Dietary Advice.docx": {
            "content": "If you're a vegan, you also need to make sure you get enough . This is because non-vegans get most of their calcium from dairy foods. Good sources of calcium for vegans include: dark green leafy vegetables pulses fortified unsweetened soya, pea and oat drinks brown and white bread calcium-set tofu sesame seeds and tahini dried fruit Talk to your midwife or doctor about how you can get all the nutrients you need for you and your baby.",
            "percent": 0.8074438304191126
        }
    }
  ])
  Api.post('/get_nodes_edges',
{
    "nodes": [
        {
            "id": "detrended",
            "label": "detrended",
            "size": 1.2,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "exercise",
            "label": "exercise",
            "size": 10.199999999999996,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "analysis",
            "label": "analysis",
            "size": 1.2,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "fluctuation",
            "label": "fluctuation",
            "size": 1.2,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "fractal",
            "label": "fractal",
            "size": 1.2,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "heartbeat",
            "label": "heartbeat",
            "size": 1.2,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "aerobic",
            "label": "aerobic",
            "size": 9.399999999999999,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "physiological",
            "label": "physiological",
            "size": 1.2,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "Biomarkers and Predictive Indicators of Longevity",
            "label": "Biomarkers and Predictive Indicators of Longevity",
            "size": 11.79999999999999,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Biomarker Discovery",
            "label": "Biomarker Discovery",
            "size": 4.400000000000001,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Lifestyle and Dietary Interventions",
            "label": "Lifestyle and Dietary Interventions",
            "size": 26.599999999999937,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Physical Fitness and Health(Sports and Exercise)",
            "label": "Physical Fitness and Health(Sports and Exercise)",
            "size": 17.39999999999997,
            "category1": "",
            "category2": ""
        },
        {
            "id": "older",
            "label": "older",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "sport",
            "label": "sport",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "activity",
            "label": "activity",
            "size": 3.600000000000001,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "aging",
            "label": "aging",
            "size": 39.40000000000002,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "adults",
            "label": "adults",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "longevity",
            "label": "longevity",
            "size": 23.799999999999947,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "physical",
            "label": "physical",
            "size": 3.800000000000001,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "ageing",
            "label": "ageing",
            "size": 6.400000000000003,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "sustained",
            "label": "sustained",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "vigorous",
            "label": "vigorous",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "exhort",
            "label": "exhort",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "expectancy",
            "label": "expectancy",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "doses",
            "label": "doses",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "mortality",
            "label": "mortality",
            "size": 6.600000000000003,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "phosphorylation",
            "label": "phosphorylation",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "metabolism",
            "label": "metabolism",
            "size": 10.399999999999995,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "metabolic",
            "label": "metabolic",
            "size": 7.600000000000004,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "creatine",
            "label": "creatine",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "atp",
            "label": "atp",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "mitochondrial",
            "label": "mitochondrial",
            "size": 3.2000000000000006,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Mitochondrial Dysfunction and Longevity"
        },
        {
            "id": "mitdna",
            "label": "mitdna",
            "size": 1,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Mitochondrial Dysfunction and Longevity"
        },
        {
            "id": "mitochondria",
            "label": "mitochondria",
            "size": 3.800000000000001,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Mitochondrial Dysfunction and Longevity"
        },
        {
            "id": "Principles and Mechanisms of Aging",
            "label": "Principles and Mechanisms of Aging",
            "size": 10.999999999999993,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Mitochondrial Dysfunction and Longevity",
            "label": "Mitochondrial Dysfunction and Longevity",
            "size": 1.5999999999999999,
            "category1": "",
            "category2": ""
        },
        {
            "id": "cardiovascular",
            "label": "cardiovascular",
            "size": 3.2000000000000006,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "circadian",
            "label": "circadian",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "endurance",
            "label": "endurance",
            "size": 2.6,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "drosophila",
            "label": "drosophila",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "Environmental and Social Wellbeing",
            "label": "Environmental and Social Wellbeing",
            "size": 2.8000000000000003,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Environmental Exposures and Aging",
            "label": "Environmental Exposures and Aging",
            "size": 2.6,
            "category1": "",
            "category2": ""
        },
        {
            "id": "health",
            "label": "health",
            "size": 7.0000000000000036,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "epidemiology",
            "label": "epidemiology",
            "size": 4.000000000000001,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "leisure",
            "label": "leisure",
            "size": 1.4,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "prolonged",
            "label": "prolonged",
            "size": 2.6,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Nutritional Interventions for Age"
        },
        {
            "id": "regeneration",
            "label": "regeneration",
            "size": 1.7999999999999998,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Nutritional Interventions for Age"
        },
        {
            "id": "diet",
            "label": "diet",
            "size": 16.599999999999973,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Nutritional Interventions for Age"
        },
        {
            "id": "fasting",
            "label": "fasting",
            "size": 4.200000000000001,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Nutritional Interventions for Age"
        },
        {
            "id": "feeding",
            "label": "feeding",
            "size": 1.7999999999999998,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Nutritional Interventions for Age"
        },
        {
            "id": "Nutritional Interventions for Age",
            "label": "Nutritional Interventions for Age",
            "size": 4.000000000000001,
            "category1": "",
            "category2": ""
        },
        {
            "id": "related Diseases and Cellular Repair",
            "label": "related Diseases and Cellular Repair",
            "size": 4.000000000000001,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Microbiome and Longevity",
            "label": "Microbiome and Longevity",
            "size": 3.600000000000001,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "label": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "size": 3.2000000000000006,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Healthy Aging",
            "label": "Healthy Aging",
            "size": 8.8,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "label": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "size": 3.2000000000000006,
            "category1": "",
            "category2": ""
        },
        {
            "id": "being",
            "label": "being",
            "size": 3.2000000000000006,
            "category1": "",
            "category2": ""
        },
        {
            "id": "dietary",
            "label": "dietary",
            "size": 9.599999999999998,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Nutritional Interventions for Age"
        },
        {
            "id": "Strategies for Promoting Longevity and Wellness in Aging",
            "label": "Strategies for Promoting Longevity and Wellness in Aging",
            "size": 5.8000000000000025,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Case Reports on Longevity",
            "label": "Case Reports on Longevity",
            "size": 1.5999999999999999,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Exceptional Aging and Interventions in Case Studies",
            "label": "Exceptional Aging and Interventions in Case Studies",
            "size": 1.2,
            "category1": "",
            "category2": ""
        },
        {
            "id": "The Role of Resilience and Impact of Interventions on Healthspan",
            "label": "The Role of Resilience and Impact of Interventions on Healthspan",
            "size": 1.2,
            "category1": "",
            "category2": ""
        },
        {
            "id": "lifespan",
            "label": "lifespan",
            "size": 18.799999999999965,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "prolonging",
            "label": "prolonging",
            "size": 6.200000000000003,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "prolong",
            "label": "prolong",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "apoptosis",
            "label": "apoptosis",
            "size": 2.4,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "mutation",
            "label": "mutation",
            "size": 2.8000000000000003,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "nucleotide",
            "label": "nucleotide",
            "size": 2.1999999999999997,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "dna",
            "label": "dna",
            "size": 3.0000000000000004,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "Cellular Senescence and Aging",
            "label": "Cellular Senescence and Aging",
            "size": 2.4,
            "category1": "",
            "category2": ""
        },
        {
            "id": "DNA Repair Mechanisms and Aging",
            "label": "DNA Repair Mechanisms and Aging",
            "size": 2.1999999999999997,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Genomic Instability and Aging",
            "label": "Genomic Instability and Aging",
            "size": 3.800000000000001,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Theoretical Frameworks and Longevity Models",
            "label": "Theoretical Frameworks and Longevity Models",
            "size": 2.8000000000000003,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "label": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "size": 1.4,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Genetic Biomarkers and Epigenetic Discoveries",
            "label": "Genetic Biomarkers and Epigenetic Discoveries",
            "size": 3.0000000000000004,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Geroscience",
            "label": "Geroscience",
            "size": 3.400000000000001,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Interdisciplinary Approaches within Geroscience",
            "label": "Interdisciplinary Approaches within Geroscience",
            "size": 2.4,
            "category1": "",
            "category2": ""
        },
        {
            "id": "ercc1",
            "label": "ercc1",
            "size": 5.600000000000002,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "Epigenetic Regulation of Aging",
            "label": "Epigenetic Regulation of Aging",
            "size": 3.2000000000000006,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Inflammation and Autophagy in Aging",
            "label": "Inflammation and Autophagy in Aging",
            "size": 1.7999999999999998,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Evolutionary Perspectives on Longevity",
            "label": "Evolutionary Perspectives on Longevity",
            "size": 2.1999999999999997,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "label": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "size": 2.8000000000000003,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "label": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "size": 3.400000000000001,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Definition and Scope of Geroscience",
            "label": "Definition and Scope of Geroscience",
            "size": 1.4,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Pharmacological and Molecular Interventions",
            "label": "Pharmacological and Molecular Interventions",
            "size": 3.400000000000001,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Anti",
            "label": "Anti",
            "size": 2.1999999999999997,
            "category1": "",
            "category2": ""
        },
        {
            "id": "aging Pharmacology",
            "label": "aging Pharmacology",
            "size": 2.1999999999999997,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Preventive Medicine",
            "label": "Preventive Medicine",
            "size": 1.7999999999999998,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Comprehensive Overview and Role of Preventive Medicine in Longevity",
            "label": "Comprehensive Overview and Role of Preventive Medicine in Longevity",
            "size": 1,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Clinical Implications",
            "label": "Clinical Implications",
            "size": 1.2,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Integrating cutting",
            "label": "Integrating cutting",
            "size": 1.2,
            "category1": "",
            "category2": ""
        },
        {
            "id": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "label": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "size": 1.2,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Technological Advancements in Longevity",
            "label": "Technological Advancements in Longevity",
            "size": 1.2,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Emerging Technologies, Big Data, and AI in Research",
            "label": "Emerging Technologies, Big Data, and AI in Research",
            "size": 1.2,
            "category1": "",
            "category2": ""
        },
        {
            "id": "ros",
            "label": "ros",
            "size": 1,
            "category1": "Theoretical Frameworks and Longevity Models",
            "category2": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)"
        },
        {
            "id": "enzymes",
            "label": "enzymes",
            "size": 1.5999999999999999,
            "category1": "Theoretical Frameworks and Longevity Models",
            "category2": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)"
        },
        {
            "id": "radicals",
            "label": "radicals",
            "size": 1.5999999999999999,
            "category1": "Theoretical Frameworks and Longevity Models",
            "category2": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)"
        },
        {
            "id": "oxidative",
            "label": "oxidative",
            "size": 3.0000000000000004,
            "category1": "Theoretical Frameworks and Longevity Models",
            "category2": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)"
        },
        {
            "id": "scavenger",
            "label": "scavenger",
            "size": 1.5999999999999999,
            "category1": "Theoretical Frameworks and Longevity Models",
            "category2": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)"
        },
        {
            "id": "antioxidants",
            "label": "antioxidants",
            "size": 1.7999999999999998,
            "category1": "Theoretical Frameworks and Longevity Models",
            "category2": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)"
        },
        {
            "id": "antioxidant",
            "label": "antioxidant",
            "size": 1.7999999999999998,
            "category1": "Theoretical Frameworks and Longevity Models",
            "category2": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)"
        },
        {
            "id": "free",
            "label": "free",
            "size": 1.7999999999999998,
            "category1": "Theoretical Frameworks and Longevity Models",
            "category2": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)"
        },
        {
            "id": "antioxidantactivity",
            "label": "antioxidantactivity",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "antioxidantstatus",
            "label": "antioxidantstatus",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "supplementation",
            "label": "supplementation",
            "size": 1.7999999999999998,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "Physical and Cognitive Activities",
            "label": "Physical and Cognitive Activities",
            "size": 1.4,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "label": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "size": 1.4,
            "category1": "",
            "category2": ""
        },
        {
            "id": "supplements",
            "label": "supplements",
            "size": 1.4,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Mind"
        },
        {
            "id": "wellness",
            "label": "wellness",
            "size": 1.4,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Mind"
        },
        {
            "id": "Mind",
            "label": "Mind",
            "size": 1.5999999999999999,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Body Approaches (Meditation, Yoga)",
            "label": "Body Approaches (Meditation, Yoga)",
            "size": 1.5999999999999999,
            "category1": "",
            "category2": ""
        },
        {
            "id": "cholesterol",
            "label": "cholesterol",
            "size": 1.9999999999999998,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Nutritional Interventions for Age"
        },
        {
            "id": "triglycerides",
            "label": "triglycerides",
            "size": 1.9999999999999998,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Nutritional Interventions for Age"
        },
        {
            "id": "psyllium",
            "label": "psyllium",
            "size": 1.9999999999999998,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Nutritional Interventions for Age"
        },
        {
            "id": "Evidence",
            "label": "Evidence",
            "size": 1.4,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Based Practices and Guidelines for Preventive Health Care",
            "label": "Based Practices and Guidelines for Preventive Health Care",
            "size": 1.4,
            "category1": "",
            "category2": ""
        },
        {
            "id": "meditation",
            "label": "meditation",
            "size": 1,
            "category1": "Preventive Medicine",
            "category2": "Evidence"
        },
        {
            "id": "biofeedback",
            "label": "biofeedback",
            "size": 1,
            "category1": "Preventive Medicine",
            "category2": "Evidence"
        },
        {
            "id": "cardiac",
            "label": "cardiac",
            "size": 1,
            "category1": "Preventive Medicine",
            "category2": "Evidence"
        },
        {
            "id": "hypertension",
            "label": "hypertension",
            "size": 1,
            "category1": "Preventive Medicine",
            "category2": "Evidence"
        },
        {
            "id": "yeast",
            "label": "yeast",
            "size": 1.2,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "hallmarks",
            "label": "hallmarks",
            "size": 2.4,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "proteomic",
            "label": "proteomic",
            "size": 3.0000000000000004,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "kinase",
            "label": "kinase",
            "size": 1.2,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "rna",
            "label": "rna",
            "size": 1.2,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "mrna",
            "label": "mrna",
            "size": 1.2,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "rnas",
            "label": "rnas",
            "size": 1.2,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "alzheimer",
            "label": "alzheimer",
            "size": 2.6,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Mitochondrial Dysfunction and Longevity"
        },
        {
            "id": "Senolytic Therapies and Hormonal Interventions",
            "label": "Senolytic Therapies and Hormonal Interventions",
            "size": 1.5999999999999999,
            "category1": "",
            "category2": ""
        },
        {
            "id": "interventions",
            "label": "interventions",
            "size": 1,
            "category1": "Healthy Aging",
            "category2": "Strategies for Promoting Longevity and Wellness in Aging"
        },
        {
            "id": "omega-3",
            "label": "omega-3",
            "size": 1,
            "category1": "Healthy Aging",
            "category2": "Strategies for Promoting Longevity and Wellness in Aging"
        },
        {
            "id": "healthy",
            "label": "healthy",
            "size": 3.2000000000000006,
            "category1": "Healthy Aging",
            "category2": "Strategies for Promoting Longevity and Wellness in Aging"
        },
        {
            "id": "vitamin",
            "label": "vitamin",
            "size": 1,
            "category1": "Healthy Aging",
            "category2": "Strategies for Promoting Longevity and Wellness in Aging"
        },
        {
            "id": "fitness",
            "label": "fitness",
            "size": 5.600000000000002,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "fitness9",
            "label": "fitness9",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "degenerative",
            "label": "degenerative",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "screening",
            "label": "screening",
            "size": 1,
            "category1": "Preventive Medicine",
            "category2": "Screening for Early Interventions and Disease Prevention"
        },
        {
            "id": "overdiagnosis",
            "label": "overdiagnosis",
            "size": 1,
            "category1": "Preventive Medicine",
            "category2": "Screening for Early Interventions and Disease Prevention"
        },
        {
            "id": "mammography",
            "label": "mammography",
            "size": 1,
            "category1": "Preventive Medicine",
            "category2": "Screening for Early Interventions and Disease Prevention"
        },
        {
            "id": "mammographic",
            "label": "mammographic",
            "size": 1,
            "category1": "Preventive Medicine",
            "category2": "Screening for Early Interventions and Disease Prevention"
        },
        {
            "id": "lifesaving",
            "label": "lifesaving",
            "size": 1,
            "category1": "Preventive Medicine",
            "category2": "Screening for Early Interventions and Disease Prevention"
        },
        {
            "id": "Screening for Early Interventions and Disease Prevention",
            "label": "Screening for Early Interventions and Disease Prevention",
            "size": 1,
            "category1": "",
            "category2": ""
        },
        {
            "id": "chronic",
            "label": "chronic",
            "size": 1.4,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "conceptofexerciseismedicine",
            "label": "conceptofexerciseismedicine",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "lifetime",
            "label": "lifetime",
            "size": 1.7999999999999998,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "senescence",
            "label": "senescence",
            "size": 3.400000000000001,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "rna-seq",
            "label": "rna-seq",
            "size": 3.400000000000001,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "inflammation",
            "label": "inflammation",
            "size": 3.0000000000000004,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "transcriptomics",
            "label": "transcriptomics",
            "size": 3.600000000000001,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "proliferate",
            "label": "proliferate",
            "size": 1.7999999999999998,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "inflammaging",
            "label": "inflammaging",
            "size": 3.400000000000001,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "transcriptomic",
            "label": "transcriptomic",
            "size": 1.5999999999999999,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "aged",
            "label": "aged",
            "size": 4.000000000000001,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "genes",
            "label": "genes",
            "size": 4.000000000000001,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "old",
            "label": "old",
            "size": 1.2,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "skin",
            "label": "skin",
            "size": 1,
            "category1": "Theoretical Frameworks and Longevity Models",
            "category2": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)"
        },
        {
            "id": "epidermal",
            "label": "epidermal",
            "size": 1,
            "category1": "Theoretical Frameworks and Longevity Models",
            "category2": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)"
        },
        {
            "id": "macrophages",
            "label": "macrophages",
            "size": 1.4,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Genomic Instability and Aging"
        },
        {
            "id": "macrophage",
            "label": "macrophage",
            "size": 1,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Genomic Instability and Aging"
        },
        {
            "id": "inflammatory",
            "label": "inflammatory",
            "size": 1.2,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Genomic Instability and Aging"
        },
        {
            "id": "fibrosis",
            "label": "fibrosis",
            "size": 3.600000000000001,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "abnormality",
            "label": "abnormality",
            "size": 3.800000000000001,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "biomarker",
            "label": "biomarker",
            "size": 5.400000000000002,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "15",
            "label": "15",
            "size": 3.800000000000001,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "growth",
            "label": "growth",
            "size": 3.800000000000001,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "tumor",
            "label": "tumor",
            "size": 3.800000000000001,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "lung",
            "label": "lung",
            "size": 3.800000000000001,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "factor",
            "label": "factor",
            "size": 3.800000000000001,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "biomarkers",
            "label": "biomarkers",
            "size": 9,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "differentiation",
            "label": "differentiation",
            "size": 3.800000000000001,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "interstitial",
            "label": "interstitial",
            "size": 3.800000000000001,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "label": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "size": 1.2,
            "category1": "",
            "category2": ""
        },
        {
            "id": "bronchiectasis",
            "label": "bronchiectasis",
            "size": 1.4,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Genetic Biomarkers and Epigenetic Discoveries"
        },
        {
            "id": "pulmonary",
            "label": "pulmonary",
            "size": 1.4,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Genetic Biomarkers and Epigenetic Discoveries"
        },
        {
            "id": "copdgene",
            "label": "copdgene",
            "size": 1,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "cytokine",
            "label": "cytokine",
            "size": 2.6,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "gdf15",
            "label": "gdf15",
            "size": 2.4,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "tgf",
            "label": "tgf",
            "size": 2.4,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "label": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "size": 1.4,
            "category1": "",
            "category2": ""
        },
        {
            "id": "fatigue",
            "label": "fatigue",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "aerobically",
            "label": "aerobically",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "exercise—aging",
            "label": "exercise—aging",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "muscular",
            "label": "muscular",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "strength",
            "label": "strength",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "muscle",
            "label": "muscle",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "rehabilitation",
            "label": "rehabilitation",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "occupational",
            "label": "occupational",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "jogging",
            "label": "jogging",
            "size": 1.4,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "cardio",
            "label": "cardio",
            "size": 3.0000000000000004,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Microbiome and Longevity"
        },
        {
            "id": "sedentary",
            "label": "sedentary",
            "size": 2.4,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Microbiome and Longevity"
        },
        {
            "id": "Preventative Healthcare and Routine Practices for Aging Population",
            "label": "Preventative Healthcare and Routine Practices for Aging Population",
            "size": 1.4,
            "category1": "",
            "category2": ""
        },
        {
            "id": "neuropsychology",
            "label": "neuropsychology",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "bmi",
            "label": "bmi",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "consumption",
            "label": "consumption",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "nutritional",
            "label": "nutritional",
            "size": 2.4,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "diets",
            "label": "diets",
            "size": 6.600000000000003,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "nutritionally",
            "label": "nutritionally",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "food4healthylife",
            "label": "food4healthylife",
            "size": 1.4,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Nutritional Interventions for Age"
        },
        {
            "id": "nutrigrade",
            "label": "nutrigrade",
            "size": 1.4,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Nutritional Interventions for Age"
        },
        {
            "id": "vegetables",
            "label": "vegetables",
            "size": 1.4,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Nutritional Interventions for Age"
        },
        {
            "id": "erythrocyte",
            "label": "erythrocyte",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "erythrocytes",
            "label": "erythrocytes",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "glutathione",
            "label": "glutathione",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "span",
            "label": "span",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "life",
            "label": "life",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "stress",
            "label": "stress",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "obesity",
            "label": "obesity",
            "size": 1.7999999999999998,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "runners",
            "label": "runners",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "calorie",
            "label": "calorie",
            "size": 2.6,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "adipose",
            "label": "adipose",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "adiposity",
            "label": "adiposity",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "igf",
            "label": "igf",
            "size": 4.600000000000001,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Microbiome and Longevity"
        },
        {
            "id": "igfbp",
            "label": "igfbp",
            "size": 1.4,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Microbiome and Longevity"
        },
        {
            "id": "vegan",
            "label": "vegan",
            "size": 1.4,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Microbiome and Longevity"
        },
        {
            "id": "neurogenesis",
            "label": "neurogenesis",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "carcinogenesis",
            "label": "carcinogenesis",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "innate",
            "label": "innate",
            "size": 1.4,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "intermittent",
            "label": "intermittent",
            "size": 1.4,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "system",
            "label": "system",
            "size": 1.4,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "metabolomic",
            "label": "metabolomic",
            "size": 1.2,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "immune",
            "label": "immune",
            "size": 1.4,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "immunology",
            "label": "immunology",
            "size": 1.4,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "mimetic",
            "label": "mimetic",
            "size": 1.4,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "anti-inﬂammatory",
            "label": "anti-inﬂammatory",
            "size": 1.4,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "metabolome",
            "label": "metabolome",
            "size": 1.2,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "homeostasis",
            "label": "homeostasis",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "nutrition",
            "label": "nutrition",
            "size": 2.1999999999999997,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "restriction",
            "label": "restriction",
            "size": 1.7999999999999998,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Genetic Biomarkers and Epigenetic Discoveries"
        },
        {
            "id": "nutrients",
            "label": "nutrients",
            "size": 1.2,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Genetic Biomarkers and Epigenetic Discoveries"
        },
        {
            "id": "human",
            "label": "human",
            "size": 1.5999999999999999,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Genetic Biomarkers and Epigenetic Discoveries"
        },
        {
            "id": "nutrient",
            "label": "nutrient",
            "size": 1.7999999999999998,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Genetic Biomarkers and Epigenetic Discoveries"
        },
        {
            "id": "genetics",
            "label": "genetics",
            "size": 1.2,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Genetic Biomarkers and Epigenetic Discoveries"
        },
        {
            "id": "longevity19",
            "label": "longevity19",
            "size": 1.2,
            "category1": "Healthy Aging",
            "category2": "Strategies for Promoting Longevity and Wellness in Aging"
        },
        {
            "id": "macronutrient",
            "label": "macronutrient",
            "size": 4.400000000000001,
            "category1": "Geroscience",
            "category2": "Interdisciplinary Approaches within Geroscience"
        },
        {
            "id": "obese",
            "label": "obese",
            "size": 1.9999999999999998,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Nutritional Interventions for Age"
        },
        {
            "id": "lifespans",
            "label": "lifespans",
            "size": 2.6,
            "category1": "Pharmacological and Molecular Interventions",
            "category2": "Anti"
        },
        {
            "id": "lifespan89",
            "label": "lifespan89",
            "size": 1.2,
            "category1": "Pharmacological and Molecular Interventions",
            "category2": "Anti"
        },
        {
            "id": "glycemic",
            "label": "glycemic",
            "size": 1.4,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Nutritional Interventions for Age"
        },
        {
            "id": "insulin",
            "label": "insulin",
            "size": 1.4,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Nutritional Interventions for Age"
        },
        {
            "id": "athletes",
            "label": "athletes",
            "size": 1.5999999999999999,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "sports",
            "label": "sports",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "rat",
            "label": "rat",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "oxygen",
            "label": "oxygen",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "anti-aging",
            "label": "anti-aging",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "species",
            "label": "species",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "reactive",
            "label": "reactive",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "klotho",
            "label": "klotho",
            "size": 1.5999999999999999,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "prolongs",
            "label": "prolongs",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "aerobics",
            "label": "aerobics",
            "size": 1.4,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "diseases",
            "label": "diseases",
            "size": 5.000000000000002,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "immortality",
            "label": "immortality",
            "size": 1.4,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "age-dependent",
            "label": "age-dependent",
            "size": 5.000000000000002,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "mutations",
            "label": "mutations",
            "size": 3.2000000000000006,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "geroprotectors",
            "label": "geroprotectors",
            "size": 5.000000000000002,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "telomeres",
            "label": "telomeres",
            "size": 1.4,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "telomere",
            "label": "telomere",
            "size": 2.4,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "chromatin",
            "label": "chromatin",
            "size": 1.5999999999999999,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "heterochromatin",
            "label": "heterochromatin",
            "size": 1.5999999999999999,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "epigenetic",
            "label": "epigenetic",
            "size": 1,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "histone",
            "label": "histone",
            "size": 1,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "histones",
            "label": "histones",
            "size": 1,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "mtdna",
            "label": "mtdna",
            "size": 2.4,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "DNA Repair Mechanisms and Aging"
        },
        {
            "id": "ribosome",
            "label": "ribosome",
            "size": 1,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Inflammation and Autophagy in Aging"
        },
        {
            "id": "mrnas",
            "label": "mrnas",
            "size": 1,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Inflammation and Autophagy in Aging"
        },
        {
            "id": "proteins",
            "label": "proteins",
            "size": 1.4,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Inflammation and Autophagy in Aging"
        },
        {
            "id": "telomerase",
            "label": "telomerase",
            "size": 1,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics"
        },
        {
            "id": "microbiota",
            "label": "microbiota",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "diverticula",
            "label": "diverticula",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "intestinal",
            "label": "intestinal",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "neutrophilia",
            "label": "neutrophilia",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "resveratrol",
            "label": "resveratrol",
            "size": 2.1999999999999997,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "veratrol",
            "label": "veratrol",
            "size": 1.9999999999999998,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "sirtuins",
            "label": "sirtuins",
            "size": 3.400000000000001,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "sirt1",
            "label": "sirt1",
            "size": 2.6,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "sirtuin",
            "label": "sirtuin",
            "size": 1.9999999999999998,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "Peptide Therapies and Pharmaceutical Innovations",
            "label": "Peptide Therapies and Pharmaceutical Innovations",
            "size": 1.2,
            "category1": "",
            "category2": ""
        },
        {
            "id": "phenformin",
            "label": "phenformin",
            "size": 1,
            "category1": "Pharmacological and Molecular Interventions",
            "category2": "Senolytic Therapies and Hormonal Interventions"
        },
        {
            "id": "autophagy",
            "label": "autophagy",
            "size": 1,
            "category1": "Pharmacological and Molecular Interventions",
            "category2": "Senolytic Therapies and Hormonal Interventions"
        },
        {
            "id": "metformin",
            "label": "metformin",
            "size": 1,
            "category1": "Pharmacological and Molecular Interventions",
            "category2": "Senolytic Therapies and Hormonal Interventions"
        },
        {
            "id": "microrna",
            "label": "microrna",
            "size": 1,
            "category1": "Pharmacological and Molecular Interventions",
            "category2": "Senolytic Therapies and Hormonal Interventions"
        },
        {
            "id": "exercising",
            "label": "exercising",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "dieting",
            "label": "dieting",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "coronary",
            "label": "coronary",
            "size": 1.5999999999999999,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "hypertensive",
            "label": "hypertensive",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "systolic",
            "label": "systolic",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "cancers",
            "label": "cancers",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "activities",
            "label": "activities",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "walking",
            "label": "walking",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "lifestyle",
            "label": "lifestyle",
            "size": 2.8000000000000003,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Microbiome and Longevity"
        },
        {
            "id": "inhabitants",
            "label": "inhabitants",
            "size": 1.9999999999999998,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Nutritional Interventions for Age"
        },
        {
            "id": "ikaria",
            "label": "ikaria",
            "size": 1.9999999999999998,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Nutritional Interventions for Age"
        },
        {
            "id": "Social Connections, Community Engagement, and Healthy Living Spaces",
            "label": "Social Connections, Community Engagement, and Healthy Living Spaces",
            "size": 1,
            "category1": "",
            "category2": ""
        },
        {
            "id": "elderly",
            "label": "elderly",
            "size": 1.9999999999999998,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "lipids",
            "label": "lipids",
            "size": 1.2,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "lipidomics",
            "label": "lipidomics",
            "size": 1.2,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "x02",
            "label": "x02",
            "size": 1,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "lipidome",
            "label": "lipidome",
            "size": 1,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id":"",
            "label":"",
            "size": 1,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "age",
            "label": "age",
            "size": 2.1999999999999997,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics"
        },
        {
            "id": "researchers",
            "label": "researchers",
            "size": 2.1999999999999997,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Genetic Biomarkers and Epigenetic Discoveries"
        },
        {
            "id": "Clinical Trials and Innovative Research",
            "label": "Clinical Trials and Innovative Research",
            "size": 1,
            "category1": "",
            "category2": ""
        },
        {
            "id": "Adaptive Trial Design and Biomarkers in Longevity Trials",
            "label": "Adaptive Trial Design and Biomarkers in Longevity Trials",
            "size": 1,
            "category1": "",
            "category2": ""
        },
        {
            "id": "methylation",
            "label": "methylation",
            "size": 1.5999999999999999,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "degeneration",
            "label": "degeneration",
            "size": 1,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "transgenic",
            "label": "transgenic",
            "size": 1,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Cellular Senescence and Aging"
        },
        {
            "id": "proteome",
            "label": "proteome",
            "size": 1.2,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "biomark",
            "label": "biomark",
            "size": 1.9999999999999998,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "proteomics",
            "label": "proteomics",
            "size": 3.0000000000000004,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "diabetes",
            "label": "diabetes",
            "size": 2.1999999999999997,
            "category1": "Environmental and Social Wellbeing",
            "category2": "Environmental Exposures and Aging"
        },
        {
            "id": "hyperlipidemia",
            "label": "hyperlipidemia",
            "size": 1,
            "category1": "Environmental and Social Wellbeing",
            "category2": "Environmental Exposures and Aging"
        },
        {
            "id": "dehydroepinadrosterone",
            "label": "dehydroepinadrosterone",
            "size": 1,
            "category1": "Environmental and Social Wellbeing",
            "category2": "Environmental Exposures and Aging"
        },
        {
            "id": "hispanic",
            "label": "hispanic",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "american",
            "label": "american",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "accelerometers",
            "label": "accelerometers",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "treadmill",
            "label": "treadmill",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "deaths",
            "label": "deaths",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "risks",
            "label": "risks",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "exertion",
            "label": "exertion",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "disease",
            "label": "disease",
            "size": 1.4,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "heart",
            "label": "heart",
            "size": 1.5999999999999999,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "medicine",
            "label": "medicine",
            "size": 1.4,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "social",
            "label": "social",
            "size": 1.4,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "exercisers",
            "label": "exercisers",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "smoking",
            "label": "smoking",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "cigarette",
            "label": "cigarette",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "mortrtrtalality",
            "label": "mortrtrtalality",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "variability",
            "label": "variability",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "autonomic",
            "label": "autonomic",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "rate",
            "label": "rate",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "homeothermic",
            "label": "homeothermic",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "editorial",
            "label": "editorial",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "physiologic",
            "label": "physiologic",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "nad+",
            "label": "nad+",
            "size": 2.1999999999999997,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "ratio",
            "label": "ratio",
            "size": 2.1999999999999997,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "poly(adp-ribose)",
            "label": "poly(adp-ribose)",
            "size": 2.1999999999999997,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "nad+/nadh",
            "label": "nad+/nadh",
            "size": 2.1999999999999997,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "polymerases",
            "label": "polymerases",
            "size": 2.1999999999999997,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "nad",
            "label": "nad",
            "size": 1.7999999999999998,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "nadph",
            "label": "nadph",
            "size": 1.4,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research"
        },
        {
            "id": "sir2",
            "label": "sir2",
            "size": 1.2,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "DNA Repair Mechanisms and Aging"
        },
        {
            "id": "nicotinamide",
            "label": "nicotinamide",
            "size": 1,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "DNA Repair Mechanisms and Aging"
        },
        {
            "id": "p53",
            "label": "p53",
            "size": 1,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "DNA Repair Mechanisms and Aging"
        },
        {
            "id": "adipokines",
            "label": "adipokines",
            "size": 1,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "●",
            "label": "●",
            "size": 1,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "adipokine",
            "label": "adipokine",
            "size": 1,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "fatty",
            "label": "fatty",
            "size": 1,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "▶",
            "label": "▶",
            "size": 1,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "acids",
            "label": "acids",
            "size": 1,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "elegans",
            "label": "elegans",
            "size": 4.000000000000001,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "protein",
            "label": "protein",
            "size": 5.600000000000002,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "healthspan",
            "label": "healthspan",
            "size": 5.400000000000002,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "source",
            "label": "source",
            "size": 5.400000000000002,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "intake",
            "label": "intake",
            "size": 5.400000000000002,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "fasting-mimicking",
            "label": "fasting-mimicking",
            "size": 5.400000000000002,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Epigenetic Regulation of Aging"
        },
        {
            "id": "vegetarian",
            "label": "vegetarian",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Microbiome and Longevity"
        },
        {
            "id": "meat",
            "label": "meat",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Microbiome and Longevity"
        },
        {
            "id": "peptide",
            "label": "peptide",
            "size": 1,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics"
        },
        {
            "id": "peptides",
            "label": "peptides",
            "size": 1,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics"
        },
        {
            "id": "neurodegenerative",
            "label": "neurodegenerative",
            "size": 1.4,
            "category1": "Theoretical Frameworks and Longevity Models",
            "category2": "Evolutionary Perspectives on Longevity"
        },
        {
            "id": "chimpanzee",
            "label": "chimpanzee",
            "size": 1.2,
            "category1": "Theoretical Frameworks and Longevity Models",
            "category2": "Evolutionary Perspectives on Longevity"
        },
        {
            "id": "evolved",
            "label": "evolved",
            "size": 1.4,
            "category1": "Theoretical Frameworks and Longevity Models",
            "category2": "Evolutionary Perspectives on Longevity"
        },
        {
            "id": "chimpanzees",
            "label": "chimpanzees",
            "size": 1.2,
            "category1": "Theoretical Frameworks and Longevity Models",
            "category2": "Evolutionary Perspectives on Longevity"
        },
        {
            "id": "evolution",
            "label": "evolution",
            "size": 1.2,
            "category1": "Theoretical Frameworks and Longevity Models",
            "category2": "Evolutionary Perspectives on Longevity"
        },
        {
            "id": "apoe",
            "label": "apoe",
            "size": 1.2,
            "category1": "Theoretical Frameworks and Longevity Models",
            "category2": "Evolutionary Perspectives on Longevity"
        },
        {
            "id": "lipid",
            "label": "lipid",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "primates",
            "label": "primates",
            "size": 1,
            "category1": "Theoretical Frameworks and Longevity Models",
            "category2": "Evolutionary Perspectives on Longevity"
        },
        {
            "id": "erectus",
            "label": "erectus",
            "size": 1,
            "category1": "Theoretical Frameworks and Longevity Models",
            "category2": "Evolutionary Perspectives on Longevity"
        },
        {
            "id": "paleolithic",
            "label": "paleolithic",
            "size": 1.4,
            "category1": "Theoretical Frameworks and Longevity Models",
            "category2": "Evolutionary Perspectives on Longevity"
        },
        {
            "id": "biochemistry",
            "label": "biochemistry",
            "size": 1.2,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "neuroproteomics",
            "label": "neuroproteomics",
            "size": 1.2,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "metabolomics",
            "label": "metabolomics",
            "size": 1.2,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Biomarker Discovery"
        },
        {
            "id": "schizophrenia",
            "label": "schizophrenia",
            "size": 1.4,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research"
        },
        {
            "id": "neurodegeneration",
            "label": "neurodegeneration",
            "size": 1.4,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research"
        },
        {
            "id": "glycolysis",
            "label": "glycolysis",
            "size": 1.4,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research"
        },
        {
            "id": "glycolytic",
            "label": "glycolytic",
            "size": 1.4,
            "category1": "Biomarkers and Predictive Indicators of Longevity",
            "category2": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research"
        },
        {
            "id": "gdp",
            "label": "gdp",
            "size": 1,
            "category1": "Environmental and Social Wellbeing",
            "category2": "Environmental Exposures and Aging"
        },
        {
            "id": "genetic",
            "label": "genetic",
            "size": 2.6,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "DNA Repair Mechanisms and Aging"
        },
        {
            "id": "adipogenesis",
            "label": "adipogenesis",
            "size": 1,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "Genomic Instability and Aging"
        },
        {
            "id": "cytochrome",
            "label": "cytochrome",
            "size": 1.2,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "DNA Repair Mechanisms and Aging"
        },
        {
            "id": "jellyfish",
            "label": "jellyfish",
            "size": 1.2,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "DNA Repair Mechanisms and Aging"
        },
        {
            "id": "oxidase",
            "label": "oxidase",
            "size": 1.2,
            "category1": "Principles and Mechanisms of Aging",
            "category2": "DNA Repair Mechanisms and Aging"
        },
        {
            "id": "motivation",
            "label": "motivation",
            "size": 1.5999999999999999,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "motivational",
            "label": "motivational",
            "size": 1.4,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "entropy",
            "label": "entropy",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "generation",
            "label": "generation",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "biothermodynamics",
            "label": "biothermodynamics",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "athletics",
            "label": "athletics",
            "size": 1.2,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "athletic",
            "label": "athletic",
            "size": 1.4,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "cardiopulmonary",
            "label": "cardiopulmonary",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "athlete",
            "label": "athlete",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        },
        {
            "id": "athleticism",
            "label": "athleticism",
            "size": 1,
            "category1": "Lifestyle and Dietary Interventions",
            "category2": "Physical Fitness and Health(Sports and Exercise)"
        }
    ],
    "edges": [
        {
            "source": "detrended",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "detrended",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "exercise",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "exercise",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "analysis",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "analysis",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "fluctuation",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "fluctuation",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "fractal",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "fractal",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "heartbeat",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "heartbeat",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "aerobic",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1
        },
        {
            "source": "aerobic",
            "target": "Biomarker Discovery",
            "weight": 0.4
        },
        {
            "source": "physiological",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "physiological",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "detrended",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "detrended",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "exercise",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 6.600000000000003
        },
        {
            "source": "exercise",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 6.400000000000003
        },
        {
            "source": "analysis",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "analysis",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "fluctuation",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "fluctuation",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "fractal",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "fractal",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "heartbeat",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "heartbeat",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "aerobic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 3.800000000000001
        },
        {
            "source": "aerobic",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 3.400000000000001
        },
        {
            "source": "physiological",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "physiological",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "older",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "older",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "sport",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "sport",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "activity",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 2.4
        },
        {
            "source": "activity",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 2.4
        },
        {
            "source": "aging",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 9
        },
        {
            "source": "aging",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 5.8000000000000025
        },
        {
            "source": "adults",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "adults",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "longevity",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 9
        },
        {
            "source": "longevity",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 5.8000000000000025
        },
        {
            "source": "physical",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 2.6
        },
        {
            "source": "physical",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 2.6
        },
        {
            "source": "ageing",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1.4
        },
        {
            "source": "ageing",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.6000000000000001
        },
        {
            "source": "sustained",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "sustained",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "vigorous",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "vigorous",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "exhort",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "exhort",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "expectancy",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "expectancy",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "doses",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "doses",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "mortality",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 4.200000000000001
        },
        {
            "source": "mortality",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 4.000000000000001
        },
        {
            "source": "phosphorylation",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "phosphorylation",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 4.400000000000001
        },
        {
            "source": "metabolism",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 1.7999999999999998
        },
        {
            "source": "metabolic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 4.400000000000001
        },
        {
            "source": "metabolic",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 2.6
        },
        {
            "source": "creatine",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "creatine",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "atp",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "atp",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "phosphorylation",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "phosphorylation",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "mitochondrial",
            "target": "Principles and Mechanisms of Aging",
            "weight": 1.4
        },
        {
            "source": "mitochondrial",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.6000000000000001
        },
        {
            "source": "atp",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "atp",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "mitdna",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "mitdna",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "mitochondria",
            "target": "Principles and Mechanisms of Aging",
            "weight": 1.9999999999999998
        },
        {
            "source": "mitochondria",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.4
        },
        {
            "source": "cardiovascular",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 2.4
        },
        {
            "source": "cardiovascular",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 2.4
        },
        {
            "source": "circadian",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "circadian",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "mitochondrial",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "mitochondrial",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "endurance",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1
        },
        {
            "source": "endurance",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 1
        },
        {
            "source": "drosophila",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "drosophila",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "exercise",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "exercise",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Environmental and Social Wellbeing",
            "weight": 1.7999999999999998
        },
        {
            "source": "aging",
            "target": "Environmental Exposures and Aging",
            "weight": 1.7999999999999998
        },
        {
            "source": "endurance",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "endurance",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "drosophila",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "drosophila",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "health",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 4.600000000000001
        },
        {
            "source": "health",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 4.000000000000001
        },
        {
            "source": "epidemiology",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1.4
        },
        {
            "source": "epidemiology",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 1.4
        },
        {
            "source": "leisure",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "leisure",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.6000000000000001
        },
        {
            "source": "prolonged",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1.4
        },
        {
            "source": "prolonged",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "prolonged",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "regeneration",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.8
        },
        {
            "source": "regeneration",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "regeneration",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 9.599999999999998
        },
        {
            "source": "diet",
            "target": "Nutritional Interventions for Age",
            "weight": 2.4
        },
        {
            "source": "diet",
            "target": "related Diseases and Cellular Repair",
            "weight": 2.4
        },
        {
            "source": "fasting",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 2.4
        },
        {
            "source": "fasting",
            "target": "Nutritional Interventions for Age",
            "weight": 0.6000000000000001
        },
        {
            "source": "fasting",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.6000000000000001
        },
        {
            "source": "feeding",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.8
        },
        {
            "source": "feeding",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "feeding",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "prolonged",
            "target": "Microbiome and Longevity",
            "weight": 0.4
        },
        {
            "source": "regeneration",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Microbiome and Longevity",
            "weight": 1.5999999999999999
        },
        {
            "source": "fasting",
            "target": "Microbiome and Longevity",
            "weight": 0.4
        },
        {
            "source": "feeding",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "prolonged",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "regeneration",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 2.1999999999999997
        },
        {
            "source": "fasting",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.6000000000000001
        },
        {
            "source": "feeding",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "prolonged",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.6000000000000001
        },
        {
            "source": "regeneration",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 2.8000000000000003
        },
        {
            "source": "fasting",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.8
        },
        {
            "source": "feeding",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "prolonged",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "prolonged",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "prolonged",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "regeneration",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "regeneration",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "regeneration",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Healthy Aging",
            "weight": 2.8000000000000003
        },
        {
            "source": "diet",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 1
        },
        {
            "source": "diet",
            "target": "being",
            "weight": 1
        },
        {
            "source": "fasting",
            "target": "Healthy Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "fasting",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "fasting",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "feeding",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "feeding",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "feeding",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "dietary",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 5.600000000000002
        },
        {
            "source": "dietary",
            "target": "Nutritional Interventions for Age",
            "weight": 1.2
        },
        {
            "source": "dietary",
            "target": "related Diseases and Cellular Repair",
            "weight": 1.2
        },
        {
            "source": "metabolism",
            "target": "Nutritional Interventions for Age",
            "weight": 1
        },
        {
            "source": "metabolism",
            "target": "related Diseases and Cellular Repair",
            "weight": 1
        },
        {
            "source": "aging",
            "target": "Nutritional Interventions for Age",
            "weight": 1.4
        },
        {
            "source": "aging",
            "target": "related Diseases and Cellular Repair",
            "weight": 1.4
        },
        {
            "source": "metabolic",
            "target": "Nutritional Interventions for Age",
            "weight": 0.8
        },
        {
            "source": "metabolic",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.8
        },
        {
            "source": "dietary",
            "target": "Microbiome and Longevity",
            "weight": 1
        },
        {
            "source": "metabolism",
            "target": "Microbiome and Longevity",
            "weight": 0.6000000000000001
        },
        {
            "source": "aging",
            "target": "Microbiome and Longevity",
            "weight": 1
        },
        {
            "source": "metabolic",
            "target": "Microbiome and Longevity",
            "weight": 0.4
        },
        {
            "source": "dietary",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 1
        },
        {
            "source": "metabolism",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.6000000000000001
        },
        {
            "source": "aging",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.8
        },
        {
            "source": "metabolic",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.6000000000000001
        },
        {
            "source": "dietary",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 1.7999999999999998
        },
        {
            "source": "dietary",
            "target": "Healthy Aging",
            "weight": 2.1999999999999997
        },
        {
            "source": "dietary",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 1
        },
        {
            "source": "metabolism",
            "target": "Healthy Aging",
            "weight": 2.4
        },
        {
            "source": "metabolism",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 1.4
        },
        {
            "source": "aging",
            "target": "Healthy Aging",
            "weight": 4.000000000000001
        },
        {
            "source": "aging",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 3.0000000000000004
        },
        {
            "source": "metabolic",
            "target": "Healthy Aging",
            "weight": 1
        },
        {
            "source": "metabolic",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.8
        },
        {
            "source": "diet",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 1.4
        },
        {
            "source": "dietary",
            "target": "Case Reports on Longevity",
            "weight": 0.4
        },
        {
            "source": "dietary",
            "target": "Exceptional Aging and Interventions in Case Studies",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "Case Reports on Longevity",
            "weight": 0.4
        },
        {
            "source": "metabolism",
            "target": "Exceptional Aging and Interventions in Case Studies",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Case Reports on Longevity",
            "weight": 0.8
        },
        {
            "source": "aging",
            "target": "Exceptional Aging and Interventions in Case Studies",
            "weight": 0.4
        },
        {
            "source": "metabolic",
            "target": "Case Reports on Longevity",
            "weight": 0.4
        },
        {
            "source": "metabolic",
            "target": "Exceptional Aging and Interventions in Case Studies",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Case Reports on Longevity",
            "weight": 0.4
        },
        {
            "source": "diet",
            "target": "Exceptional Aging and Interventions in Case Studies",
            "weight": 0.2
        },
        {
            "source": "dietary",
            "target": "The Role of Resilience and Impact of Interventions on Healthspan",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "The Role of Resilience and Impact of Interventions on Healthspan",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "The Role of Resilience and Impact of Interventions on Healthspan",
            "weight": 0.4
        },
        {
            "source": "metabolic",
            "target": "The Role of Resilience and Impact of Interventions on Healthspan",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "The Role of Resilience and Impact of Interventions on Healthspan",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 5.200000000000002
        },
        {
            "source": "lifespan",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 3.0000000000000004
        },
        {
            "source": "prolonging",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1.2
        },
        {
            "source": "prolonging",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.8
        },
        {
            "source": "prolong",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "prolong",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "apoptosis",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "apoptosis",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "mutation",
            "target": "Principles and Mechanisms of Aging",
            "weight": 1.2
        },
        {
            "source": "mutation",
            "target": "Cellular Senescence and Aging",
            "weight": 0.4
        },
        {
            "source": "aging",
            "target": "Principles and Mechanisms of Aging",
            "weight": 8.8
        },
        {
            "source": "aging",
            "target": "Cellular Senescence and Aging",
            "weight": 1.4
        },
        {
            "source": "nucleotide",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "nucleotide",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "dna",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "dna",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "apoptosis",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "mutation",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.4
        },
        {
            "source": "aging",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 1
        },
        {
            "source": "nucleotide",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "dna",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "apoptosis",
            "target": "Genomic Instability and Aging",
            "weight": 0.4
        },
        {
            "source": "mutation",
            "target": "Genomic Instability and Aging",
            "weight": 0.4
        },
        {
            "source": "aging",
            "target": "Genomic Instability and Aging",
            "weight": 2.8000000000000003
        },
        {
            "source": "nucleotide",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "dna",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "apoptosis",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "apoptosis",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.2
        },
        {
            "source": "mutation",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "mutation",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 1.7999999999999998
        },
        {
            "source": "aging",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.4
        },
        {
            "source": "nucleotide",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "nucleotide",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.2
        },
        {
            "source": "dna",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "dna",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.2
        },
        {
            "source": "apoptosis",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "apoptosis",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "mutation",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "mutation",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 7.0000000000000036
        },
        {
            "source": "aging",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 1.5999999999999999
        },
        {
            "source": "nucleotide",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "nucleotide",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "dna",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.8
        },
        {
            "source": "dna",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.4
        },
        {
            "source": "apoptosis",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "apoptosis",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "mutation",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "mutation",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Geroscience",
            "weight": 2.1999999999999997
        },
        {
            "source": "aging",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 1.2
        },
        {
            "source": "nucleotide",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "nucleotide",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "dna",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "dna",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "apoptosis",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "apoptosis",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "mutation",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "mutation",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "nucleotide",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "nucleotide",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "dna",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "dna",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Principles and Mechanisms of Aging",
            "weight": 1
        },
        {
            "source": "prolonging",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Principles and Mechanisms of Aging",
            "weight": 1.9999999999999998
        },
        {
            "source": "lifespan",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "aerobic",
            "target": "Principles and Mechanisms of Aging",
            "weight": 1
        },
        {
            "source": "aerobic",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Principles and Mechanisms of Aging",
            "weight": 1
        },
        {
            "source": "ercc1",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.4
        },
        {
            "source": "aerobic",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Epigenetic Regulation of Aging",
            "weight": 2.1999999999999997
        },
        {
            "source": "lifespan",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "aerobic",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 1
        },
        {
            "source": "lifespan",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "aerobic",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Genomic Instability and Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "aerobic",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 1.4
        },
        {
            "source": "lifespan",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 1
        },
        {
            "source": "lifespan",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 1
        },
        {
            "source": "aerobic",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.4
        },
        {
            "source": "aerobic",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.4
        },
        {
            "source": "ercc1",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.8
        },
        {
            "source": "prolonging",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 3.2000000000000006
        },
        {
            "source": "lifespan",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.8
        },
        {
            "source": "aerobic",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.8
        },
        {
            "source": "ercc1",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 1
        },
        {
            "source": "lifespan",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.6000000000000001
        },
        {
            "source": "aerobic",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Biomarker Discovery",
            "weight": 1.9999999999999998
        },
        {
            "source": "lifespan",
            "target": "Biomarker Discovery",
            "weight": 0.8
        },
        {
            "source": "ercc1",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 1.9999999999999998
        },
        {
            "source": "lifespan",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.8
        },
        {
            "source": "aerobic",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Geroscience",
            "weight": 0.4
        },
        {
            "source": "prolonging",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.6000000000000001
        },
        {
            "source": "lifespan",
            "target": "Geroscience",
            "weight": 1.4
        },
        {
            "source": "lifespan",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.4
        },
        {
            "source": "aerobic",
            "target": "Geroscience",
            "weight": 0.4
        },
        {
            "source": "aerobic",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Geroscience",
            "weight": 0.4
        },
        {
            "source": "ercc1",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.8
        },
        {
            "source": "aerobic",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 2.4
        },
        {
            "source": "aging",
            "target": "Anti",
            "weight": 1.2
        },
        {
            "source": "aging",
            "target": "aging Pharmacology",
            "weight": 1.2
        },
        {
            "source": "lifespan",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 1.2
        },
        {
            "source": "lifespan",
            "target": "Anti",
            "weight": 0.8
        },
        {
            "source": "lifespan",
            "target": "aging Pharmacology",
            "weight": 0.8
        },
        {
            "source": "aerobic",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "aerobic",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "aerobic",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Nutritional Interventions for Age",
            "weight": 0.6000000000000001
        },
        {
            "source": "lifespan",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.6000000000000001
        },
        {
            "source": "aerobic",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "aerobic",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "ercc1",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Microbiome and Longevity",
            "weight": 1
        },
        {
            "source": "aerobic",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Comprehensive Overview and Role of Preventive Medicine in Longevity",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Comprehensive Overview and Role of Preventive Medicine in Longevity",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Comprehensive Overview and Role of Preventive Medicine in Longevity",
            "weight": 0.2
        },
        {
            "source": "aerobic",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "aerobic",
            "target": "Comprehensive Overview and Role of Preventive Medicine in Longevity",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Comprehensive Overview and Role of Preventive Medicine in Longevity",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.8
        },
        {
            "source": "lifespan",
            "target": "Environmental Exposures and Aging",
            "weight": 0.8
        },
        {
            "source": "aerobic",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "aerobic",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "prolonging",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Healthy Aging",
            "weight": 1.9999999999999998
        },
        {
            "source": "lifespan",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 1.7999999999999998
        },
        {
            "source": "aerobic",
            "target": "Healthy Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "aerobic",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "ercc1",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 1
        },
        {
            "source": "aging",
            "target": "being",
            "weight": 1
        },
        {
            "source": "lifespan",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "aerobic",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.4
        },
        {
            "source": "aerobic",
            "target": "being",
            "weight": 0.4
        },
        {
            "source": "ercc1",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Case Reports on Longevity",
            "weight": 0.4
        },
        {
            "source": "prolonging",
            "target": "Exceptional Aging and Interventions in Case Studies",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Case Reports on Longevity",
            "weight": 0.4
        },
        {
            "source": "lifespan",
            "target": "Exceptional Aging and Interventions in Case Studies",
            "weight": 0.2
        },
        {
            "source": "aerobic",
            "target": "Case Reports on Longevity",
            "weight": 0.4
        },
        {
            "source": "aerobic",
            "target": "Exceptional Aging and Interventions in Case Studies",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Case Reports on Longevity",
            "weight": 0.4
        },
        {
            "source": "ercc1",
            "target": "Exceptional Aging and Interventions in Case Studies",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "The Role of Resilience and Impact of Interventions on Healthspan",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "The Role of Resilience and Impact of Interventions on Healthspan",
            "weight": 0.2
        },
        {
            "source": "aerobic",
            "target": "The Role of Resilience and Impact of Interventions on Healthspan",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "The Role of Resilience and Impact of Interventions on Healthspan",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Clinical Implications",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Integrating cutting",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Clinical Implications",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Integrating cutting",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Clinical Implications",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Integrating cutting",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "weight": 0.2
        },
        {
            "source": "aerobic",
            "target": "Clinical Implications",
            "weight": 0.2
        },
        {
            "source": "aerobic",
            "target": "Integrating cutting",
            "weight": 0.2
        },
        {
            "source": "aerobic",
            "target": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Clinical Implications",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Integrating cutting",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Technological Advancements in Longevity",
            "weight": 0.2
        },
        {
            "source": "prolonging",
            "target": "Emerging Technologies, Big Data, and AI in Research",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Technological Advancements in Longevity",
            "weight": 0.4
        },
        {
            "source": "aging",
            "target": "Emerging Technologies, Big Data, and AI in Research",
            "weight": 0.4
        },
        {
            "source": "lifespan",
            "target": "Technological Advancements in Longevity",
            "weight": 0.4
        },
        {
            "source": "lifespan",
            "target": "Emerging Technologies, Big Data, and AI in Research",
            "weight": 0.4
        },
        {
            "source": "aerobic",
            "target": "Technological Advancements in Longevity",
            "weight": 0.2
        },
        {
            "source": "aerobic",
            "target": "Emerging Technologies, Big Data, and AI in Research",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Technological Advancements in Longevity",
            "weight": 0.2
        },
        {
            "source": "ercc1",
            "target": "Emerging Technologies, Big Data, and AI in Research",
            "weight": 0.2
        },
        {
            "source": "ros",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "ros",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.2
        },
        {
            "source": "exercise",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "exercise",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.2
        },
        {
            "source": "health",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "health",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.2
        },
        {
            "source": "enzymes",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "enzymes",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.2
        },
        {
            "source": "radicals",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "radicals",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.2
        },
        {
            "source": "oxidative",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "oxidative",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.2
        },
        {
            "source": "scavenger",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "scavenger",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.2
        },
        {
            "source": "antioxidants",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "antioxidants",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.2
        },
        {
            "source": "antioxidant",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "antioxidant",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.2
        },
        {
            "source": "free",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "free",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.2
        },
        {
            "source": "enzymes",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "enzymes",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "radicals",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "radicals",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "oxidative",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.8
        },
        {
            "source": "oxidative",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.8
        },
        {
            "source": "antioxidantactivity",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "antioxidantactivity",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "scavenger",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "scavenger",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "antioxidants",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "antioxidants",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.6000000000000001
        },
        {
            "source": "antioxidant",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "antioxidant",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.6000000000000001
        },
        {
            "source": "free",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "free",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "antioxidantstatus",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "antioxidantstatus",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "supplementation",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "supplementation",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "exercise",
            "target": "Physical and Cognitive Activities",
            "weight": 0.6000000000000001
        },
        {
            "source": "exercise",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.6000000000000001
        },
        {
            "source": "health",
            "target": "Physical and Cognitive Activities",
            "weight": 0.2
        },
        {
            "source": "health",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.2
        },
        {
            "source": "enzymes",
            "target": "Physical and Cognitive Activities",
            "weight": 0.2
        },
        {
            "source": "enzymes",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.2
        },
        {
            "source": "radicals",
            "target": "Physical and Cognitive Activities",
            "weight": 0.2
        },
        {
            "source": "radicals",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.2
        },
        {
            "source": "oxidative",
            "target": "Physical and Cognitive Activities",
            "weight": 0.2
        },
        {
            "source": "oxidative",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.2
        },
        {
            "source": "antioxidantstatus",
            "target": "Physical and Cognitive Activities",
            "weight": 0.2
        },
        {
            "source": "antioxidantstatus",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.2
        },
        {
            "source": "supplementation",
            "target": "Physical and Cognitive Activities",
            "weight": 0.2
        },
        {
            "source": "supplementation",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.2
        },
        {
            "source": "scavenger",
            "target": "Physical and Cognitive Activities",
            "weight": 0.2
        },
        {
            "source": "scavenger",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.2
        },
        {
            "source": "antioxidants",
            "target": "Physical and Cognitive Activities",
            "weight": 0.2
        },
        {
            "source": "antioxidants",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.2
        },
        {
            "source": "antioxidant",
            "target": "Physical and Cognitive Activities",
            "weight": 0.2
        },
        {
            "source": "antioxidant",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.2
        },
        {
            "source": "free",
            "target": "Physical and Cognitive Activities",
            "weight": 0.2
        },
        {
            "source": "free",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.2
        },
        {
            "source": "health",
            "target": "Mind",
            "weight": 0.2
        },
        {
            "source": "health",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.2
        },
        {
            "source": "supplements",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "supplements",
            "target": "Mind",
            "weight": 0.2
        },
        {
            "source": "supplements",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.2
        },
        {
            "source": "supplementation",
            "target": "Mind",
            "weight": 0.2
        },
        {
            "source": "supplementation",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Mind",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.2
        },
        {
            "source": "wellness",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "wellness",
            "target": "Mind",
            "weight": 0.2
        },
        {
            "source": "wellness",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.2
        },
        {
            "source": "supplements",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "wellness",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "health",
            "target": "Healthy Aging",
            "weight": 1
        },
        {
            "source": "health",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.8
        },
        {
            "source": "supplements",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "supplements",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "supplementation",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "supplementation",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Healthy Aging",
            "weight": 4.400000000000001
        },
        {
            "source": "longevity",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 3.0000000000000004
        },
        {
            "source": "wellness",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "wellness",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "cholesterol",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.8
        },
        {
            "source": "cholesterol",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "cholesterol",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "triglycerides",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.8
        },
        {
            "source": "triglycerides",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "triglycerides",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "psyllium",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.8
        },
        {
            "source": "psyllium",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "psyllium",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "cholesterol",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "triglycerides",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "psyllium",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "cholesterol",
            "target": "Mind",
            "weight": 0.2
        },
        {
            "source": "cholesterol",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.2
        },
        {
            "source": "dietary",
            "target": "Mind",
            "weight": 0.6000000000000001
        },
        {
            "source": "dietary",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.6000000000000001
        },
        {
            "source": "triglycerides",
            "target": "Mind",
            "weight": 0.2
        },
        {
            "source": "triglycerides",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.2
        },
        {
            "source": "psyllium",
            "target": "Mind",
            "weight": 0.2
        },
        {
            "source": "psyllium",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Mind",
            "weight": 0.6000000000000001
        },
        {
            "source": "diet",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.6000000000000001
        },
        {
            "source": "cholesterol",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "triglycerides",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "psyllium",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "cholesterol",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "cholesterol",
            "target": "Evidence",
            "weight": 0.2
        },
        {
            "source": "cholesterol",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.2
        },
        {
            "source": "dietary",
            "target": "Preventive Medicine",
            "weight": 0.4
        },
        {
            "source": "dietary",
            "target": "Evidence",
            "weight": 0.4
        },
        {
            "source": "dietary",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.4
        },
        {
            "source": "triglycerides",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "triglycerides",
            "target": "Evidence",
            "weight": 0.2
        },
        {
            "source": "triglycerides",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.2
        },
        {
            "source": "psyllium",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "psyllium",
            "target": "Evidence",
            "weight": 0.2
        },
        {
            "source": "psyllium",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Preventive Medicine",
            "weight": 0.4
        },
        {
            "source": "diet",
            "target": "Evidence",
            "weight": 0.4
        },
        {
            "source": "diet",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.4
        },
        {
            "source": "cholesterol",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "cholesterol",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "cholesterol",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "dietary",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.8
        },
        {
            "source": "dietary",
            "target": "being",
            "weight": 0.8
        },
        {
            "source": "triglycerides",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "triglycerides",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "triglycerides",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "psyllium",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "psyllium",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "psyllium",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "health",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "health",
            "target": "Evidence",
            "weight": 0.2
        },
        {
            "source": "health",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.2
        },
        {
            "source": "meditation",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "meditation",
            "target": "Evidence",
            "weight": 0.2
        },
        {
            "source": "meditation",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.2
        },
        {
            "source": "biofeedback",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "biofeedback",
            "target": "Evidence",
            "weight": 0.2
        },
        {
            "source": "biofeedback",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.2
        },
        {
            "source": "cardiac",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "cardiac",
            "target": "Evidence",
            "weight": 0.2
        },
        {
            "source": "cardiac",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.2
        },
        {
            "source": "hypertension",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "hypertension",
            "target": "Evidence",
            "weight": 0.2
        },
        {
            "source": "hypertension",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.2
        },
        {
            "source": "yeast",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "yeast",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "hallmarks",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "hallmarks",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.4
        },
        {
            "source": "proteomic",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "proteomic",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "mitochondria",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "kinase",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "kinase",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "yeast",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "hallmarks",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "proteomic",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "mitochondria",
            "target": "Genomic Instability and Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "kinase",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "rna",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "rna",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "mrna",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "mrna",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "rnas",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "rnas",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "hallmarks",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "hallmarks",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "rna",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "rna",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "mrna",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "mrna",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "rnas",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "rnas",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "alzheimer",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "alzheimer",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "Principles and Mechanisms of Aging",
            "weight": 1
        },
        {
            "source": "metabolism",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "hallmarks",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.4
        },
        {
            "source": "alzheimer",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "alzheimer",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.6000000000000001
        },
        {
            "source": "metabolism",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.4
        },
        {
            "source": "hallmarks",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "mitochondrial",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "mitochondrial",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "mitochondria",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "mitochondria",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "alzheimer",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "alzheimer",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "hallmarks",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "hallmarks",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.8
        },
        {
            "source": "mitochondrial",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "mitochondrial",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "mitochondria",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "mitochondria",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "alzheimer",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "alzheimer",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "alzheimer",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "hallmarks",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "hallmarks",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "hallmarks",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "mitochondrial",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "mitochondrial",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "mitochondria",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "mitochondria",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "mitochondria",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "exercise",
            "target": "Healthy Aging",
            "weight": 1.4
        },
        {
            "source": "exercise",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.8
        },
        {
            "source": "interventions",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "interventions",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "omega-3",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "omega-3",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "healthy",
            "target": "Healthy Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "healthy",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.4
        },
        {
            "source": "vitamin",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "vitamin",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "fitness",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 3.600000000000001
        },
        {
            "source": "fitness",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 3.600000000000001
        },
        {
            "source": "fitness9",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "fitness9",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "degenerative",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "degenerative",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "screening",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "screening",
            "target": "Screening for Early Interventions and Disease Prevention",
            "weight": 0.2
        },
        {
            "source": "overdiagnosis",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "overdiagnosis",
            "target": "Screening for Early Interventions and Disease Prevention",
            "weight": 0.2
        },
        {
            "source": "mammography",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "mammography",
            "target": "Screening for Early Interventions and Disease Prevention",
            "weight": 0.2
        },
        {
            "source": "mammographic",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "mammographic",
            "target": "Screening for Early Interventions and Disease Prevention",
            "weight": 0.2
        },
        {
            "source": "lifesaving",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "lifesaving",
            "target": "Screening for Early Interventions and Disease Prevention",
            "weight": 0.2
        },
        {
            "source": "chronic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "chronic",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.6000000000000001
        },
        {
            "source": "conceptofexerciseismedicine",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "conceptofexerciseismedicine",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "lifetime",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "lifetime",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "senescence",
            "target": "Principles and Mechanisms of Aging",
            "weight": 1.7999999999999998
        },
        {
            "source": "senescence",
            "target": "Cellular Senescence and Aging",
            "weight": 0.4
        },
        {
            "source": "rna-seq",
            "target": "Principles and Mechanisms of Aging",
            "weight": 1.7999999999999998
        },
        {
            "source": "rna-seq",
            "target": "Cellular Senescence and Aging",
            "weight": 0.4
        },
        {
            "source": "inflammation",
            "target": "Principles and Mechanisms of Aging",
            "weight": 1.7999999999999998
        },
        {
            "source": "inflammation",
            "target": "Cellular Senescence and Aging",
            "weight": 0.4
        },
        {
            "source": "transcriptomics",
            "target": "Principles and Mechanisms of Aging",
            "weight": 1.9999999999999998
        },
        {
            "source": "transcriptomics",
            "target": "Cellular Senescence and Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "proliferate",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "proliferate",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "inflammaging",
            "target": "Principles and Mechanisms of Aging",
            "weight": 1.7999999999999998
        },
        {
            "source": "inflammaging",
            "target": "Cellular Senescence and Aging",
            "weight": 0.4
        },
        {
            "source": "lifetime",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "senescence",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.4
        },
        {
            "source": "rna-seq",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.4
        },
        {
            "source": "inflammation",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "transcriptomics",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.4
        },
        {
            "source": "proliferate",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "inflammaging",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.4
        },
        {
            "source": "lifetime",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "senescence",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.4
        },
        {
            "source": "rna-seq",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.4
        },
        {
            "source": "inflammation",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "transcriptomics",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.4
        },
        {
            "source": "proliferate",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "inflammaging",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.4
        },
        {
            "source": "lifetime",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "senescence",
            "target": "Genomic Instability and Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "rna-seq",
            "target": "Genomic Instability and Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "inflammation",
            "target": "Genomic Instability and Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "transcriptomics",
            "target": "Genomic Instability and Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "proliferate",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "inflammaging",
            "target": "Genomic Instability and Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "lifetime",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "lifetime",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "senescence",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.4
        },
        {
            "source": "senescence",
            "target": "Environmental Exposures and Aging",
            "weight": 0.4
        },
        {
            "source": "rna-seq",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.4
        },
        {
            "source": "rna-seq",
            "target": "Environmental Exposures and Aging",
            "weight": 0.4
        },
        {
            "source": "inflammation",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.4
        },
        {
            "source": "inflammation",
            "target": "Environmental Exposures and Aging",
            "weight": 0.4
        },
        {
            "source": "transcriptomics",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.4
        },
        {
            "source": "transcriptomics",
            "target": "Environmental Exposures and Aging",
            "weight": 0.4
        },
        {
            "source": "proliferate",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "proliferate",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "inflammaging",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.4
        },
        {
            "source": "inflammaging",
            "target": "Environmental Exposures and Aging",
            "weight": 0.4
        },
        {
            "source": "transcriptomic",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "transcriptomic",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "aged",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "aged",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "mitochondria",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "transcriptomic",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "aged",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "mitochondria",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.4
        },
        {
            "source": "transcriptomic",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "aged",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "transcriptomic",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "transcriptomic",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "aged",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.4
        },
        {
            "source": "aged",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "mitochondria",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.4
        },
        {
            "source": "mitochondria",
            "target": "Environmental Exposures and Aging",
            "weight": 0.4
        },
        {
            "source": "genes",
            "target": "Principles and Mechanisms of Aging",
            "weight": 1.2
        },
        {
            "source": "genes",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "old",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "old",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "aged",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "ageing",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "ageing",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.4
        },
        {
            "source": "genes",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1.5999999999999999
        },
        {
            "source": "genes",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.6000000000000001
        },
        {
            "source": "senescence",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "senescence",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "rna-seq",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "rna-seq",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "transcriptomics",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "transcriptomics",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "old",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "old",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "inflammaging",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "inflammaging",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "aged",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "aged",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "ageing",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 2.6
        },
        {
            "source": "ageing",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.8
        },
        {
            "source": "senescence",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "senescence",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.2
        },
        {
            "source": "rna-seq",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "rna-seq",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.2
        },
        {
            "source": "skin",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "skin",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.2
        },
        {
            "source": "transcriptomics",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "transcriptomics",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.2
        },
        {
            "source": "epidermal",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "epidermal",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.2
        },
        {
            "source": "inflammaging",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "inflammaging",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.2
        },
        {
            "source": "aged",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "aged",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 0.2
        },
        {
            "source": "macrophages",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "macrophages",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "macrophage",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "macrophage",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "inflammatory",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "inflammatory",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "fibrosis",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1.4
        },
        {
            "source": "fibrosis",
            "target": "Biomarker Discovery",
            "weight": 0.6000000000000001
        },
        {
            "source": "abnormality",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1.5999999999999999
        },
        {
            "source": "abnormality",
            "target": "Biomarker Discovery",
            "weight": 0.8
        },
        {
            "source": "biomarker",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 3.400000000000001
        },
        {
            "source": "biomarker",
            "target": "Biomarker Discovery",
            "weight": 1.4
        },
        {
            "source": "15",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1.5999999999999999
        },
        {
            "source": "15",
            "target": "Biomarker Discovery",
            "weight": 0.8
        },
        {
            "source": "growth",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1.5999999999999999
        },
        {
            "source": "growth",
            "target": "Biomarker Discovery",
            "weight": 0.8
        },
        {
            "source": "tumor",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1.5999999999999999
        },
        {
            "source": "tumor",
            "target": "Biomarker Discovery",
            "weight": 0.8
        },
        {
            "source": "lung",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1.5999999999999999
        },
        {
            "source": "lung",
            "target": "Biomarker Discovery",
            "weight": 0.8
        },
        {
            "source": "factor",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1.5999999999999999
        },
        {
            "source": "factor",
            "target": "Biomarker Discovery",
            "weight": 0.8
        },
        {
            "source": "biomarkers",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 3.2000000000000006
        },
        {
            "source": "biomarkers",
            "target": "Biomarker Discovery",
            "weight": 1.5999999999999999
        },
        {
            "source": "differentiation",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1.5999999999999999
        },
        {
            "source": "differentiation",
            "target": "Biomarker Discovery",
            "weight": 0.8
        },
        {
            "source": "interstitial",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1.5999999999999999
        },
        {
            "source": "interstitial",
            "target": "Biomarker Discovery",
            "weight": 0.8
        },
        {
            "source": "fibrosis",
            "target": "Geroscience",
            "weight": 0.4
        },
        {
            "source": "fibrosis",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "abnormality",
            "target": "Geroscience",
            "weight": 0.4
        },
        {
            "source": "abnormality",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "biomarker",
            "target": "Geroscience",
            "weight": 0.6000000000000001
        },
        {
            "source": "biomarker",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "15",
            "target": "Geroscience",
            "weight": 0.4
        },
        {
            "source": "15",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "growth",
            "target": "Geroscience",
            "weight": 0.4
        },
        {
            "source": "growth",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "tumor",
            "target": "Geroscience",
            "weight": 0.4
        },
        {
            "source": "tumor",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "lung",
            "target": "Geroscience",
            "weight": 0.4
        },
        {
            "source": "lung",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "factor",
            "target": "Geroscience",
            "weight": 0.4
        },
        {
            "source": "factor",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Geroscience",
            "weight": 0.8
        },
        {
            "source": "biomarkers",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "differentiation",
            "target": "Geroscience",
            "weight": 0.4
        },
        {
            "source": "differentiation",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "interstitial",
            "target": "Geroscience",
            "weight": 0.4
        },
        {
            "source": "interstitial",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "fibrosis",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.2
        },
        {
            "source": "abnormality",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.2
        },
        {
            "source": "biomarker",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.2
        },
        {
            "source": "15",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.2
        },
        {
            "source": "growth",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.2
        },
        {
            "source": "tumor",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.4
        },
        {
            "source": "lung",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.2
        },
        {
            "source": "factor",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.2
        },
        {
            "source": "differentiation",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.2
        },
        {
            "source": "interstitial",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.2
        },
        {
            "source": "fibrosis",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.4
        },
        {
            "source": "abnormality",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.4
        },
        {
            "source": "15",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.4
        },
        {
            "source": "growth",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.4
        },
        {
            "source": "tumor",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.4
        },
        {
            "source": "lung",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.4
        },
        {
            "source": "factor",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.4
        },
        {
            "source": "bronchiectasis",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "bronchiectasis",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "pulmonary",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "pulmonary",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "differentiation",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.4
        },
        {
            "source": "interstitial",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.4
        },
        {
            "source": "bronchiectasis",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "pulmonary",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "fibrosis",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "fibrosis",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "abnormality",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "abnormality",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "15",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "15",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "growth",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "growth",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "tumor",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "tumor",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "lung",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "lung",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "factor",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "factor",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "bronchiectasis",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "bronchiectasis",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "pulmonary",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "pulmonary",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "differentiation",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "differentiation",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "interstitial",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "interstitial",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "copdgene",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "copdgene",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "cytokine",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1
        },
        {
            "source": "cytokine",
            "target": "Biomarker Discovery",
            "weight": 0.4
        },
        {
            "source": "fibrosis",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "fibrosis",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "abnormality",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "abnormality",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "gdf15",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "gdf15",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "15",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "15",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "growth",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "growth",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "tumor",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "tumor",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "lung",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "lung",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "factor",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "factor",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "tgf",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "tgf",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "differentiation",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "differentiation",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "interstitial",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "interstitial",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "cytokine",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "cytokine",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "fibrosis",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "abnormality",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "gdf15",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "15",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "growth",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "tumor",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "lung",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "factor",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "tgf",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "differentiation",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "interstitial",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "cytokine",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "fibrosis",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "abnormality",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "gdf15",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "15",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "growth",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "tumor",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "lung",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "factor",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "tgf",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "differentiation",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "interstitial",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "cytokine",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "fibrosis",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "abnormality",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "gdf15",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "15",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "growth",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "tumor",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "lung",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "factor",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "tgf",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "differentiation",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "interstitial",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "cytokine",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "gdf15",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.8
        },
        {
            "source": "gdf15",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "tgf",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.8
        },
        {
            "source": "tgf",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "cytokine",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "fibrosis",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.2
        },
        {
            "source": "abnormality",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.2
        },
        {
            "source": "gdf15",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.2
        },
        {
            "source": "15",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.2
        },
        {
            "source": "growth",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.2
        },
        {
            "source": "tumor",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.4
        },
        {
            "source": "lung",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.2
        },
        {
            "source": "factor",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.2
        },
        {
            "source": "tgf",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.2
        },
        {
            "source": "differentiation",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.2
        },
        {
            "source": "interstitial",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.2
        },
        {
            "source": "cytokine",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.2
        },
        {
            "source": "gdf15",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "tgf",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "fibrosis",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "abnormality",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "gdf15",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "15",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "growth",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "tumor",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "lung",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "factor",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "tgf",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "differentiation",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "interstitial",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "cytokine",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "fatigue",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "fatigue",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "aerobically",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "aerobically",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "exercise—aging",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "exercise—aging",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "muscular",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "muscular",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "strength",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "strength",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "muscle",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "muscle",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "rehabilitation",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "rehabilitation",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "occupational",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "occupational",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "jogging",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "jogging",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "jogging",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "jogging",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "fitness",
            "target": "Healthy Aging",
            "weight": 1.2
        },
        {
            "source": "fitness",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.8
        },
        {
            "source": "exercise",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "cardio",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.8
        },
        {
            "source": "cardio",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "sedentary",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "sedentary",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Microbiome and Longevity",
            "weight": 1.5999999999999999
        },
        {
            "source": "mortality",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "cardio",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.6000000000000001
        },
        {
            "source": "sedentary",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "cardio",
            "target": "Physical and Cognitive Activities",
            "weight": 0.2
        },
        {
            "source": "cardio",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.2
        },
        {
            "source": "sedentary",
            "target": "Physical and Cognitive Activities",
            "weight": 0.2
        },
        {
            "source": "sedentary",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Physical and Cognitive Activities",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.2
        },
        {
            "source": "mortality",
            "target": "Physical and Cognitive Activities",
            "weight": 0.2
        },
        {
            "source": "mortality",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.2
        },
        {
            "source": "cardio",
            "target": "Healthy Aging",
            "weight": 1
        },
        {
            "source": "cardio",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.4
        },
        {
            "source": "sedentary",
            "target": "Healthy Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "sedentary",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "mortality",
            "target": "Healthy Aging",
            "weight": 1
        },
        {
            "source": "mortality",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "exercise",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.4
        },
        {
            "source": "exercise",
            "target": "being",
            "weight": 0.4
        },
        {
            "source": "cardio",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.4
        },
        {
            "source": "cardio",
            "target": "being",
            "weight": 0.4
        },
        {
            "source": "sedentary",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "sedentary",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 1.2
        },
        {
            "source": "longevity",
            "target": "being",
            "weight": 1.2
        },
        {
            "source": "mortality",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "mortality",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "exercise",
            "target": "Preventative Healthcare and Routine Practices for Aging Population",
            "weight": 0.2
        },
        {
            "source": "cardio",
            "target": "Preventative Healthcare and Routine Practices for Aging Population",
            "weight": 0.2
        },
        {
            "source": "sedentary",
            "target": "Preventative Healthcare and Routine Practices for Aging Population",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Preventative Healthcare and Routine Practices for Aging Population",
            "weight": 0.2
        },
        {
            "source": "mortality",
            "target": "Preventative Healthcare and Routine Practices for Aging Population",
            "weight": 0.2
        },
        {
            "source": "exercise",
            "target": "Clinical Implications",
            "weight": 0.2
        },
        {
            "source": "exercise",
            "target": "Integrating cutting",
            "weight": 0.2
        },
        {
            "source": "exercise",
            "target": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "weight": 0.2
        },
        {
            "source": "cardio",
            "target": "Clinical Implications",
            "weight": 0.2
        },
        {
            "source": "cardio",
            "target": "Integrating cutting",
            "weight": 0.2
        },
        {
            "source": "cardio",
            "target": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "weight": 0.2
        },
        {
            "source": "sedentary",
            "target": "Clinical Implications",
            "weight": 0.2
        },
        {
            "source": "sedentary",
            "target": "Integrating cutting",
            "weight": 0.2
        },
        {
            "source": "sedentary",
            "target": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Clinical Implications",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Integrating cutting",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "weight": 0.2
        },
        {
            "source": "mortality",
            "target": "Clinical Implications",
            "weight": 0.2
        },
        {
            "source": "mortality",
            "target": "Integrating cutting",
            "weight": 0.2
        },
        {
            "source": "mortality",
            "target": "edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "weight": 0.2
        },
        {
            "source": "neuropsychology",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "neuropsychology",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "bmi",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "bmi",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "consumption",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "consumption",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "nutritional",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.8
        },
        {
            "source": "nutritional",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.6000000000000001
        },
        {
            "source": "diets",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 4.200000000000001
        },
        {
            "source": "diets",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 1.4
        },
        {
            "source": "nutritionally",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "nutritionally",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "food4healthylife",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "food4healthylife",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "food4healthylife",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "diets",
            "target": "Nutritional Interventions for Age",
            "weight": 1
        },
        {
            "source": "diets",
            "target": "related Diseases and Cellular Repair",
            "weight": 1
        },
        {
            "source": "nutrigrade",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "nutrigrade",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "nutrigrade",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "vegetables",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "vegetables",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "vegetables",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "food4healthylife",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "diets",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 1
        },
        {
            "source": "nutrigrade",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "vegetables",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "food4healthylife",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "nutrigrade",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "vegetables",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "erythrocyte",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "erythrocyte",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "erythrocytes",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "erythrocytes",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "glutathione",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "glutathione",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "span",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "span",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "life",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "life",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "stress",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "stress",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "obesity",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.8
        },
        {
            "source": "obesity",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.8
        },
        {
            "source": "runners",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "runners",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "nutritional",
            "target": "Healthy Aging",
            "weight": 0.8
        },
        {
            "source": "nutritional",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.4
        },
        {
            "source": "endurance",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "endurance",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "nutritional",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.4
        },
        {
            "source": "nutritional",
            "target": "being",
            "weight": 0.4
        },
        {
            "source": "metabolic",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "metabolic",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "endurance",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "endurance",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "calorie",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1.2
        },
        {
            "source": "calorie",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.6000000000000001
        },
        {
            "source": "adipose",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "adipose",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "adiposity",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "adiposity",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "igf",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1.4
        },
        {
            "source": "igf",
            "target": "Microbiome and Longevity",
            "weight": 0.4
        },
        {
            "source": "calorie",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "igfbp",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "igfbp",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "vegan",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "vegan",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "igf",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.4
        },
        {
            "source": "calorie",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "igfbp",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "vegan",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "igf",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "igfbp",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "vegan",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "neurogenesis",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "neurogenesis",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "carcinogenesis",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "carcinogenesis",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "carcinogenesis",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "carcinogenesis",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "innate",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "innate",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "intermittent",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "intermittent",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "system",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "system",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "prolonged",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "prolonged",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "metabolomic",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "metabolomic",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "immune",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "immune",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "metabolic",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "metabolic",
            "target": "Biomarker Discovery",
            "weight": 0.4
        },
        {
            "source": "immunology",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "immunology",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "mimetic",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "mimetic",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "macrophages",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "macrophages",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "anti-inﬂammatory",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "anti-inﬂammatory",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 3.800000000000001
        },
        {
            "source": "longevity",
            "target": "Biomarker Discovery",
            "weight": 1.4
        },
        {
            "source": "metabolome",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "metabolome",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "fasting",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "fasting",
            "target": "Biomarker Discovery",
            "weight": 0.4
        },
        {
            "source": "innate",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "innate",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "intermittent",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "intermittent",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "system",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "system",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "metabolomic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "metabolomic",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "immune",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "immune",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "immunology",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "immunology",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "mimetic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "mimetic",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "macrophages",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "macrophages",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "anti-inﬂammatory",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "anti-inﬂammatory",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "metabolome",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "metabolome",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "innate",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "homeostasis",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "homeostasis",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "intermittent",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "system",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "nutrition",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.8
        },
        {
            "source": "nutrition",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "immune",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "immunology",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "mimetic",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "anti-inﬂammatory",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "genes",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.4
        },
        {
            "source": "restriction",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "restriction",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "nutrients",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "nutrients",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "calorie",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "calorie",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "human",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "human",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "nutrient",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "nutrient",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.6000000000000001
        },
        {
            "source": "genetics",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "genetics",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "restriction",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "nutrients",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "calorie",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "human",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "nutrient",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 1
        },
        {
            "source": "genetics",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "longevity19",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "longevity19",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.4
        },
        {
            "source": "fasting",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.4
        },
        {
            "source": "macronutrient",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "macronutrient",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "diets",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "diets",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "dietary",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "dietary",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Geroscience",
            "weight": 0.8
        },
        {
            "source": "diet",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.4
        },
        {
            "source": "macronutrient",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1.9999999999999998
        },
        {
            "source": "macronutrient",
            "target": "Nutritional Interventions for Age",
            "weight": 0.4
        },
        {
            "source": "macronutrient",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.4
        },
        {
            "source": "macronutrient",
            "target": "Microbiome and Longevity",
            "weight": 0.4
        },
        {
            "source": "diets",
            "target": "Microbiome and Longevity",
            "weight": 0.4
        },
        {
            "source": "macronutrient",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.4
        },
        {
            "source": "macronutrient",
            "target": "Mind",
            "weight": 0.4
        },
        {
            "source": "macronutrient",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.4
        },
        {
            "source": "diets",
            "target": "Mind",
            "weight": 0.4
        },
        {
            "source": "diets",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.4
        },
        {
            "source": "metabolism",
            "target": "Mind",
            "weight": 0.4
        },
        {
            "source": "metabolism",
            "target": "Body Approaches (Meditation, Yoga)",
            "weight": 0.4
        },
        {
            "source": "macronutrient",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "macronutrient",
            "target": "Healthy Aging",
            "weight": 1.2
        },
        {
            "source": "macronutrient",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.4
        },
        {
            "source": "diets",
            "target": "Healthy Aging",
            "weight": 1.2
        },
        {
            "source": "diets",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.4
        },
        {
            "source": "macronutrient",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.4
        },
        {
            "source": "macronutrient",
            "target": "being",
            "weight": 0.4
        },
        {
            "source": "diets",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.4
        },
        {
            "source": "diets",
            "target": "being",
            "weight": 0.4
        },
        {
            "source": "metabolism",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.6000000000000001
        },
        {
            "source": "metabolism",
            "target": "being",
            "weight": 0.6000000000000001
        },
        {
            "source": "macronutrient",
            "target": "Preventative Healthcare and Routine Practices for Aging Population",
            "weight": 0.4
        },
        {
            "source": "diets",
            "target": "Preventative Healthcare and Routine Practices for Aging Population",
            "weight": 0.4
        },
        {
            "source": "dietary",
            "target": "Preventative Healthcare and Routine Practices for Aging Population",
            "weight": 0.4
        },
        {
            "source": "metabolism",
            "target": "Preventative Healthcare and Routine Practices for Aging Population",
            "weight": 0.4
        },
        {
            "source": "diet",
            "target": "Preventative Healthcare and Routine Practices for Aging Population",
            "weight": 0.4
        },
        {
            "source": "obese",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1.2
        },
        {
            "source": "obese",
            "target": "Nutritional Interventions for Age",
            "weight": 0.4
        },
        {
            "source": "obese",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.4
        },
        {
            "source": "obese",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.4
        },
        {
            "source": "obese",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "lifespans",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.4
        },
        {
            "source": "lifespans",
            "target": "Anti",
            "weight": 0.4
        },
        {
            "source": "lifespans",
            "target": "aging Pharmacology",
            "weight": 0.4
        },
        {
            "source": "lifespan89",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.4
        },
        {
            "source": "lifespan89",
            "target": "Anti",
            "weight": 0.4
        },
        {
            "source": "lifespan89",
            "target": "aging Pharmacology",
            "weight": 0.4
        },
        {
            "source": "longevity",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 1
        },
        {
            "source": "longevity",
            "target": "Anti",
            "weight": 0.6000000000000001
        },
        {
            "source": "longevity",
            "target": "aging Pharmacology",
            "weight": 0.6000000000000001
        },
        {
            "source": "macronutrient",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "macronutrient",
            "target": "Evidence",
            "weight": 0.2
        },
        {
            "source": "macronutrient",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.2
        },
        {
            "source": "diets",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "diets",
            "target": "Evidence",
            "weight": 0.2
        },
        {
            "source": "diets",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "Preventive Medicine",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "Evidence",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "Based Practices and Guidelines for Preventive Health Care",
            "weight": 0.2
        },
        {
            "source": "restriction",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "restriction",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "restriction",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "calorie",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "calorie",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "glycemic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "glycemic",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "glycemic",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "insulin",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "insulin",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "insulin",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "restriction",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "glycemic",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "insulin",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "restriction",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "restriction",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "calorie",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "calorie",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "glycemic",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "glycemic",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "insulin",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "insulin",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "athletes",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.8
        },
        {
            "source": "athletes",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.8
        },
        {
            "source": "sports",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "sports",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "rat",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "rat",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "oxygen",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "oxygen",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "anti-aging",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "anti-aging",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "species",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "species",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "reactive",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "reactive",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "klotho",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "klotho",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.6000000000000001
        },
        {
            "source": "prolongs",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "prolongs",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "aerobics",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "aerobics",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.6000000000000001
        },
        {
            "source": "genes",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "diseases",
            "target": "Principles and Mechanisms of Aging",
            "weight": 2.4
        },
        {
            "source": "diseases",
            "target": "Cellular Senescence and Aging",
            "weight": 0.4
        },
        {
            "source": "immortality",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "immortality",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Principles and Mechanisms of Aging",
            "weight": 2.6
        },
        {
            "source": "biomarkers",
            "target": "Cellular Senescence and Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "age-dependent",
            "target": "Principles and Mechanisms of Aging",
            "weight": 2.4
        },
        {
            "source": "age-dependent",
            "target": "Cellular Senescence and Aging",
            "weight": 0.4
        },
        {
            "source": "mutations",
            "target": "Principles and Mechanisms of Aging",
            "weight": 1.5999999999999999
        },
        {
            "source": "mutations",
            "target": "Cellular Senescence and Aging",
            "weight": 0.4
        },
        {
            "source": "geroprotectors",
            "target": "Principles and Mechanisms of Aging",
            "weight": 2.4
        },
        {
            "source": "geroprotectors",
            "target": "Cellular Senescence and Aging",
            "weight": 0.4
        },
        {
            "source": "genes",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.4
        },
        {
            "source": "diseases",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.4
        },
        {
            "source": "immortality",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.4
        },
        {
            "source": "age-dependent",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.4
        },
        {
            "source": "mutations",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.4
        },
        {
            "source": "geroprotectors",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.4
        },
        {
            "source": "genes",
            "target": "Genomic Instability and Aging",
            "weight": 0.4
        },
        {
            "source": "diseases",
            "target": "Genomic Instability and Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "immortality",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Genomic Instability and Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "age-dependent",
            "target": "Genomic Instability and Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "mutations",
            "target": "Genomic Instability and Aging",
            "weight": 0.4
        },
        {
            "source": "geroprotectors",
            "target": "Genomic Instability and Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "telomeres",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "telomeres",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "telomere",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "telomere",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "chromatin",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "chromatin",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "heterochromatin",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "heterochromatin",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "telomeres",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "diseases",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "telomere",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.4
        },
        {
            "source": "biomarkers",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "age-dependent",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "chromatin",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.4
        },
        {
            "source": "geroprotectors",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "heterochromatin",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.4
        },
        {
            "source": "telomeres",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "telomere",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "chromatin",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "heterochromatin",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "epigenetic",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "epigenetic",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "histone",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "histone",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "histones",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "histones",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "mtdna",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "mtdna",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "mitochondrial",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.4
        },
        {
            "source": "mitochondria",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "mtdna",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "diseases",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.4
        },
        {
            "source": "mitochondrial",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.4
        },
        {
            "source": "age-dependent",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.4
        },
        {
            "source": "mutations",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "geroprotectors",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.4
        },
        {
            "source": "mtdna",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "mitochondrial",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "mtdna",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "mtdna",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "diseases",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "diseases",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "mitochondrial",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "mitochondrial",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "age-dependent",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "age-dependent",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "mutations",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "mutations",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "geroprotectors",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "geroprotectors",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "ribosome",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "ribosome",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "mrnas",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "mrnas",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "proteins",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "proteins",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 0.2
        },
        {
            "source": "diseases",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "diseases",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "telomere",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.8
        },
        {
            "source": "telomere",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.4
        },
        {
            "source": "proteomic",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1.5999999999999999
        },
        {
            "source": "proteomic",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.8
        },
        {
            "source": "telomerase",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "telomerase",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.8
        },
        {
            "source": "age-dependent",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "age-dependent",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "geroprotectors",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "geroprotectors",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "microbiota",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "microbiota",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "diverticula",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "diverticula",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "diseases",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "diseases",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "intestinal",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "intestinal",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "neutrophilia",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "neutrophilia",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "biomarkers",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "age-dependent",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "age-dependent",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "inflammatory",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "inflammatory",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "geroprotectors",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "geroprotectors",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "resveratrol",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "resveratrol",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "veratrol",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "veratrol",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "sirtuins",
            "target": "Principles and Mechanisms of Aging",
            "weight": 1
        },
        {
            "source": "sirtuins",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.4
        },
        {
            "source": "sirt1",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "sirt1",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "sirtuin",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "sirtuin",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "resveratrol",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "resveratrol",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "veratrol",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "veratrol",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "diseases",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "diseases",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "sirtuins",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "sirtuins",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.4
        },
        {
            "source": "age-dependent",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "age-dependent",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "geroprotectors",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "geroprotectors",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "sirt1",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "sirt1",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "sirtuin",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "sirtuin",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "resveratrol",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.8
        },
        {
            "source": "resveratrol",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "resveratrol",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "veratrol",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "veratrol",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "veratrol",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "diseases",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.8
        },
        {
            "source": "diseases",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "diseases",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "sirtuins",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "sirtuins",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "sirtuins",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.8
        },
        {
            "source": "biomarkers",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "age-dependent",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.8
        },
        {
            "source": "age-dependent",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "age-dependent",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "geroprotectors",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.8
        },
        {
            "source": "geroprotectors",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "geroprotectors",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "sirt1",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "sirt1",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "sirt1",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "sirtuin",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "sirtuin",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "sirtuin",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "resveratrol",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.4
        },
        {
            "source": "veratrol",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "diseases",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.4
        },
        {
            "source": "sirtuins",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.4
        },
        {
            "source": "age-dependent",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.4
        },
        {
            "source": "geroprotectors",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.4
        },
        {
            "source": "sirt1",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "sirtuin",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "resveratrol",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.2
        },
        {
            "source": "veratrol",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.2
        },
        {
            "source": "diseases",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.2
        },
        {
            "source": "aging",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.4
        },
        {
            "source": "sirtuins",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.2
        },
        {
            "source": "age-dependent",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.2
        },
        {
            "source": "geroprotectors",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.2
        },
        {
            "source": "sirt1",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.2
        },
        {
            "source": "sirtuin",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.2
        },
        {
            "source": "resveratrol",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "resveratrol",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "resveratrol",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "veratrol",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "veratrol",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "veratrol",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "diseases",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "diseases",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "sirtuins",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "sirtuins",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "sirtuins",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "age-dependent",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "age-dependent",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "geroprotectors",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "geroprotectors",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "sirt1",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "sirt1",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "sirt1",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "sirtuin",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "sirtuin",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "sirtuin",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "phenformin",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "phenformin",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "autophagy",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "autophagy",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "metformin",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "metformin",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "microrna",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "microrna",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "healthy",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1.5999999999999999
        },
        {
            "source": "healthy",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.8
        },
        {
            "source": "exercising",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "exercising",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "dieting",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "dieting",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "obesity",
            "target": "Physical and Cognitive Activities",
            "weight": 0.2
        },
        {
            "source": "obesity",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.2
        },
        {
            "source": "exercising",
            "target": "Physical and Cognitive Activities",
            "weight": 0.2
        },
        {
            "source": "exercising",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.2
        },
        {
            "source": "dieting",
            "target": "Physical and Cognitive Activities",
            "weight": 0.2
        },
        {
            "source": "dieting",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Physical and Cognitive Activities",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 0.2
        },
        {
            "source": "epidemiology",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "epidemiology",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.4
        },
        {
            "source": "activity",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "activity",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.4
        },
        {
            "source": "physical",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "physical",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.4
        },
        {
            "source": "coronary",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.8
        },
        {
            "source": "coronary",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.8
        },
        {
            "source": "hypertensive",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "hypertensive",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "systolic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "systolic",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "cancers",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "cancers",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "cancers",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "cancers",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "activities",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "activities",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "walking",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "walking",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "health",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "lifestyle",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1.4
        },
        {
            "source": "lifestyle",
            "target": "Microbiome and Longevity",
            "weight": 0.4
        },
        {
            "source": "healthy",
            "target": "Microbiome and Longevity",
            "weight": 0.4
        },
        {
            "source": "ageing",
            "target": "Microbiome and Longevity",
            "weight": 0.4
        },
        {
            "source": "health",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.6000000000000001
        },
        {
            "source": "lifestyle",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.6000000000000001
        },
        {
            "source": "healthy",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "ageing",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "lifestyle",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.6000000000000001
        },
        {
            "source": "inhabitants",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "inhabitants",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "inhabitants",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "ikaria",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "ikaria",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "ikaria",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "aged",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1
        },
        {
            "source": "aged",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "aged",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "lifestyle",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "lifestyle",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Nutritional Interventions for Age",
            "weight": 0.8
        },
        {
            "source": "longevity",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.8
        },
        {
            "source": "healthy",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "healthy",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "ageing",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "ageing",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "inhabitants",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "ikaria",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "aged",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "inhabitants",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "ikaria",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "aged",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.6000000000000001
        },
        {
            "source": "inhabitants",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "inhabitants",
            "target": "Social Connections, Community Engagement, and Healthy Living Spaces",
            "weight": 0.2
        },
        {
            "source": "ikaria",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "ikaria",
            "target": "Social Connections, Community Engagement, and Healthy Living Spaces",
            "weight": 0.2
        },
        {
            "source": "aged",
            "target": "Social Connections, Community Engagement, and Healthy Living Spaces",
            "weight": 0.2
        },
        {
            "source": "lifestyle",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "lifestyle",
            "target": "Social Connections, Community Engagement, and Healthy Living Spaces",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.8
        },
        {
            "source": "longevity",
            "target": "Social Connections, Community Engagement, and Healthy Living Spaces",
            "weight": 0.2
        },
        {
            "source": "healthy",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "healthy",
            "target": "Social Connections, Community Engagement, and Healthy Living Spaces",
            "weight": 0.2
        },
        {
            "source": "ageing",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "ageing",
            "target": "Social Connections, Community Engagement, and Healthy Living Spaces",
            "weight": 0.2
        },
        {
            "source": "inhabitants",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "inhabitants",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "ikaria",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "ikaria",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "aged",
            "target": "Healthy Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "aged",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.4
        },
        {
            "source": "lifestyle",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "lifestyle",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "ageing",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "ageing",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "inhabitants",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "inhabitants",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "ikaria",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "ikaria",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "aged",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "aged",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "lifestyle",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "lifestyle",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "healthy",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "healthy",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "ageing",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "ageing",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "elderly",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "elderly",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.6000000000000001
        },
        {
            "source": "lipids",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "lipids",
            "target": "Biomarker Discovery",
            "weight": 0.4
        },
        {
            "source": "lipidomics",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "lipidomics",
            "target": "Biomarker Discovery",
            "weight": 0.4
        },
        {
            "source": "x02",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "x02",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "lipidome",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "lipidome",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "elderly",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "elderly",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source":"",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source":"",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "elderly",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "elderly",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "biomarker",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.8
        },
        {
            "source": "age",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.6000000000000001
        },
        {
            "source": "age",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "ageing",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.6000000000000001
        },
        {
            "source": "age",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "ageing",
            "target": "Biomarker Discovery",
            "weight": 0.6000000000000001
        },
        {
            "source": "biomarker",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.6000000000000001
        },
        {
            "source": "age",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.4
        },
        {
            "source": "biomarker",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.4
        },
        {
            "source": "epidemiology",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1
        },
        {
            "source": "epidemiology",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "researchers",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1
        },
        {
            "source": "researchers",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "ageing",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.4
        },
        {
            "source": "epidemiology",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "researchers",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "biomarker",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.2
        },
        {
            "source": "epidemiology",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.2
        },
        {
            "source": "researchers",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.2
        },
        {
            "source": "ageing",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.2
        },
        {
            "source": "epidemiology",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "researchers",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "epidemiology",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "researchers",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "biomarker",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "epidemiology",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "epidemiology",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "researchers",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "researchers",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "ageing",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "ageing",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "biomarker",
            "target": "Clinical Trials and Innovative Research",
            "weight": 0.2
        },
        {
            "source": "biomarker",
            "target": "Adaptive Trial Design and Biomarkers in Longevity Trials",
            "weight": 0.2
        },
        {
            "source": "epidemiology",
            "target": "Clinical Trials and Innovative Research",
            "weight": 0.2
        },
        {
            "source": "epidemiology",
            "target": "Adaptive Trial Design and Biomarkers in Longevity Trials",
            "weight": 0.2
        },
        {
            "source": "researchers",
            "target": "Clinical Trials and Innovative Research",
            "weight": 0.2
        },
        {
            "source": "researchers",
            "target": "Adaptive Trial Design and Biomarkers in Longevity Trials",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Clinical Trials and Innovative Research",
            "weight": 0.2
        },
        {
            "source": "biomarkers",
            "target": "Adaptive Trial Design and Biomarkers in Longevity Trials",
            "weight": 0.2
        },
        {
            "source": "ageing",
            "target": "Clinical Trials and Innovative Research",
            "weight": 0.2
        },
        {
            "source": "ageing",
            "target": "Adaptive Trial Design and Biomarkers in Longevity Trials",
            "weight": 0.2
        },
        {
            "source": "mtdna",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "mutations",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "dna",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "methylation",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "methylation",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "mtdna",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.6000000000000001
        },
        {
            "source": "mtdna",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "telomere",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "mutations",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.6000000000000001
        },
        {
            "source": "mutations",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "methylation",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.6000000000000001
        },
        {
            "source": "methylation",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "mtdna",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "mutations",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "dna",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "methylation",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "mtdna",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "telomere",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "mutations",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "dna",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "methylation",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "degeneration",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "degeneration",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "transgenic",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "transgenic",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "ageing",
            "target": "Cellular Senescence and Aging",
            "weight": 0.2
        },
        {
            "source": "proteome",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "proteome",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "biomark",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1
        },
        {
            "source": "biomark",
            "target": "Biomarker Discovery",
            "weight": 0.4
        },
        {
            "source": "proteomics",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1.7999999999999998
        },
        {
            "source": "proteomics",
            "target": "Biomarker Discovery",
            "weight": 0.8
        },
        {
            "source": "diabetes",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "diabetes",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "hyperlipidemia",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "hyperlipidemia",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "dehydroepinadrosterone",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "dehydroepinadrosterone",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Environmental Exposures and Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "diabetes",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1
        },
        {
            "source": "diabetes",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "hispanic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "hispanic",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "american",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "american",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "accelerometers",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "accelerometers",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "treadmill",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "treadmill",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "deaths",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "deaths",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "risks",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "risks",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "exertion",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "exertion",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "disease",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "disease",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.6000000000000001
        },
        {
            "source": "heart",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.8
        },
        {
            "source": "heart",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.8
        },
        {
            "source": "medicine",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "medicine",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.6000000000000001
        },
        {
            "source": "social",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "social",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.6000000000000001
        },
        {
            "source": "exercisers",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "exercisers",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "smoking",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "smoking",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "cigarette",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "cigarette",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "mortrtrtalality",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "mortrtrtalality",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "variability",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "variability",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "autonomic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "autonomic",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "rate",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "rate",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "homeothermic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "homeothermic",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "editorial",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "editorial",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "physiologic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "physiologic",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "nad+",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "nad+",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "ratio",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "ratio",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "oxidative",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "oxidative",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "metabolic",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "metabolic",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "poly(adp-ribose)",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "poly(adp-ribose)",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "nad+/nadh",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "nad+/nadh",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "polymerases",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.8
        },
        {
            "source": "polymerases",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Principles and Mechanisms of Aging",
            "weight": 1.5999999999999999
        },
        {
            "source": "longevity",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.4
        },
        {
            "source": "nad",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "nad",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "nad+",
            "target": "Genomic Instability and Aging",
            "weight": 0.4
        },
        {
            "source": "ratio",
            "target": "Genomic Instability and Aging",
            "weight": 0.4
        },
        {
            "source": "metabolism",
            "target": "Genomic Instability and Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "oxidative",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "sirtuins",
            "target": "Genomic Instability and Aging",
            "weight": 0.4
        },
        {
            "source": "metabolic",
            "target": "Genomic Instability and Aging",
            "weight": 0.4
        },
        {
            "source": "poly(adp-ribose)",
            "target": "Genomic Instability and Aging",
            "weight": 0.4
        },
        {
            "source": "nad+/nadh",
            "target": "Genomic Instability and Aging",
            "weight": 0.4
        },
        {
            "source": "polymerases",
            "target": "Genomic Instability and Aging",
            "weight": 0.4
        },
        {
            "source": "longevity",
            "target": "Genomic Instability and Aging",
            "weight": 0.8
        },
        {
            "source": "nad",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "nad+",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "nad+",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "ratio",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "ratio",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "oxidative",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "oxidative",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "sirtuins",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "sirtuins",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "poly(adp-ribose)",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "poly(adp-ribose)",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "nad+/nadh",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "nad+/nadh",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "polymerases",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "polymerases",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "nad",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "nad",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "nadph",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "nadph",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "nad+",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "nad+",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "ratio",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "ratio",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "oxidative",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "oxidative",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "sirtuins",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "sirtuins",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "poly(adp-ribose)",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "poly(adp-ribose)",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "nad+/nadh",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "nad+/nadh",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "polymerases",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "polymerases",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "nad",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "nad",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "nadph",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "nadph",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "nad+",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "nad+",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "ratio",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "ratio",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "oxidative",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "oxidative",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "sirtuins",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "sirtuins",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "poly(adp-ribose)",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "poly(adp-ribose)",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "nad+/nadh",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "nad+/nadh",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "polymerases",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "polymerases",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "nad",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "nad",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "nadph",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "nadph",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "sirt1",
            "target": "Genomic Instability and Aging",
            "weight": 0.4
        },
        {
            "source": "sir2",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "sir2",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "nicotinamide",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "nicotinamide",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "nad+",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "ratio",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "sirtuins",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "p53",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "p53",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "poly(adp-ribose)",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "nad+/nadh",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "polymerases",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.4
        },
        {
            "source": "sirt1",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "adipokines",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "adipokines",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "●",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "●",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "adipokine",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "adipokine",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "fatty",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "fatty",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "metabolism",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "▶",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "▶",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "acids",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "acids",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "free",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "free",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "elegans",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "elegans",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "protein",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "igf",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "igf",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "healthspan",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "healthspan",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "source",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "source",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "intake",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "intake",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "diet",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "fasting-mimicking",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "fasting-mimicking",
            "target": "Epigenetic Regulation of Aging",
            "weight": 0.2
        },
        {
            "source": "elegans",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "igf",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "healthspan",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "source",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "intake",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "fasting-mimicking",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "elegans",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "elegans",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "igf",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "igf",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "healthspan",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "healthspan",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "source",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "source",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "intake",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "intake",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.8
        },
        {
            "source": "longevity",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.8
        },
        {
            "source": "fasting-mimicking",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "fasting-mimicking",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "elegans",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "elegans",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.6000000000000001
        },
        {
            "source": "protein",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "igf",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "igf",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "healthspan",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "healthspan",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "source",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "source",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "intake",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "intake",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "diet",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "fasting-mimicking",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "fasting-mimicking",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "elegans",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "igf",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "healthspan",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "source",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "intake",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "fasting-mimicking",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "elegans",
            "target": "Geroscience",
            "weight": 0.6000000000000001
        },
        {
            "source": "elegans",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "Geroscience",
            "weight": 0.6000000000000001
        },
        {
            "source": "protein",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "igf",
            "target": "Geroscience",
            "weight": 0.6000000000000001
        },
        {
            "source": "igf",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "healthspan",
            "target": "Geroscience",
            "weight": 0.6000000000000001
        },
        {
            "source": "healthspan",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "source",
            "target": "Geroscience",
            "weight": 0.6000000000000001
        },
        {
            "source": "source",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "intake",
            "target": "Geroscience",
            "weight": 0.6000000000000001
        },
        {
            "source": "intake",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Geroscience",
            "weight": 1
        },
        {
            "source": "longevity",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "fasting-mimicking",
            "target": "Geroscience",
            "weight": 0.6000000000000001
        },
        {
            "source": "fasting-mimicking",
            "target": "Definition and Scope of Geroscience",
            "weight": 0.2
        },
        {
            "source": "elegans",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.2
        },
        {
            "source": "igf",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.2
        },
        {
            "source": "healthspan",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.2
        },
        {
            "source": "source",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.2
        },
        {
            "source": "intake",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.2
        },
        {
            "source": "fasting-mimicking",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 0.2
        },
        {
            "source": "elegans",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "igf",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "healthspan",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "source",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "intake",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.6000000000000001
        },
        {
            "source": "fasting-mimicking",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "elegans",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "elegans",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "elegans",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "protein",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "igf",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "igf",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "igf",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "healthspan",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "healthspan",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "healthspan",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "source",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "source",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "source",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "intake",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "intake",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "intake",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "diet",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "fasting-mimicking",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "fasting-mimicking",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "fasting-mimicking",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "elegans",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "igf",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "healthspan",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "source",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "intake",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "fasting-mimicking",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 0.2
        },
        {
            "source": "elegans",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.2
        },
        {
            "source": "igf",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.2
        },
        {
            "source": "healthspan",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.2
        },
        {
            "source": "source",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.2
        },
        {
            "source": "intake",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.2
        },
        {
            "source": "diet",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.2
        },
        {
            "source": "fasting-mimicking",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 0.2
        },
        {
            "source": "elegans",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.8
        },
        {
            "source": "elegans",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "elegans",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1.7999999999999998
        },
        {
            "source": "protein",
            "target": "Nutritional Interventions for Age",
            "weight": 0.6000000000000001
        },
        {
            "source": "protein",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.6000000000000001
        },
        {
            "source": "igf",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "igf",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "healthspan",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1.7999999999999998
        },
        {
            "source": "healthspan",
            "target": "Nutritional Interventions for Age",
            "weight": 0.6000000000000001
        },
        {
            "source": "healthspan",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.6000000000000001
        },
        {
            "source": "source",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1.7999999999999998
        },
        {
            "source": "source",
            "target": "Nutritional Interventions for Age",
            "weight": 0.6000000000000001
        },
        {
            "source": "source",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.6000000000000001
        },
        {
            "source": "intake",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1.7999999999999998
        },
        {
            "source": "intake",
            "target": "Nutritional Interventions for Age",
            "weight": 0.6000000000000001
        },
        {
            "source": "intake",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.6000000000000001
        },
        {
            "source": "fasting-mimicking",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 1.7999999999999998
        },
        {
            "source": "fasting-mimicking",
            "target": "Nutritional Interventions for Age",
            "weight": 0.6000000000000001
        },
        {
            "source": "fasting-mimicking",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.6000000000000001
        },
        {
            "source": "elegans",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "Microbiome and Longevity",
            "weight": 0.6000000000000001
        },
        {
            "source": "healthspan",
            "target": "Microbiome and Longevity",
            "weight": 0.6000000000000001
        },
        {
            "source": "source",
            "target": "Microbiome and Longevity",
            "weight": 0.6000000000000001
        },
        {
            "source": "intake",
            "target": "Microbiome and Longevity",
            "weight": 0.6000000000000001
        },
        {
            "source": "fasting-mimicking",
            "target": "Microbiome and Longevity",
            "weight": 0.6000000000000001
        },
        {
            "source": "elegans",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.4
        },
        {
            "source": "healthspan",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.4
        },
        {
            "source": "source",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.4
        },
        {
            "source": "intake",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.4
        },
        {
            "source": "fasting-mimicking",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.4
        },
        {
            "source": "elegans",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "healthspan",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "source",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "intake",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "fasting-mimicking",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "elegans",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "elegans",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "Healthy Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "protein",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.4
        },
        {
            "source": "igf",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "igf",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "healthspan",
            "target": "Healthy Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "healthspan",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.4
        },
        {
            "source": "source",
            "target": "Healthy Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "source",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.4
        },
        {
            "source": "intake",
            "target": "Healthy Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "intake",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.4
        },
        {
            "source": "fasting-mimicking",
            "target": "Healthy Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "fasting-mimicking",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.4
        },
        {
            "source": "nutritional",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "nutritional",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "nutrition",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "nutrition",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "nutrition",
            "target": "Healthy Aging",
            "weight": 0.6000000000000001
        },
        {
            "source": "nutrition",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.4
        },
        {
            "source": "protein",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "healthspan",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "healthspan",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "nutrition",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "nutrition",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "source",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "source",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "intake",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "intake",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "fasting-mimicking",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "fasting-mimicking",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "vegetarian",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "vegetarian",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "meat",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "meat",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "nutrition",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "diabetes",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "diabetes",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "nutrient",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "nutrient",
            "target": "Nutritional Interventions for Age",
            "weight": 0.2
        },
        {
            "source": "nutrient",
            "target": "related Diseases and Cellular Repair",
            "weight": 0.2
        },
        {
            "source": "diabetes",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "nutrient",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "diabetes",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "nutrient",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.6000000000000001
        },
        {
            "source": "proteomic",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "biomark",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "proteomics",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "biomark",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "proteomics",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.6000000000000001
        },
        {
            "source": "proteomic",
            "target": "Biomarker Discovery",
            "weight": 0.4
        },
        {
            "source": "proteomic",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "biomark",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "proteomics",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "biomarker",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "biomarker",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "proteomic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "proteomic",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "biomark",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "biomark",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "proteomics",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "proteomics",
            "target": "Microbiome and Longevity",
            "weight": 0.2
        },
        {
            "source": "protein",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "proteome",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "proteins",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.4
        },
        {
            "source": "proteins",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.4
        },
        {
            "source": "mortality",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "mortality",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "peptide",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "peptide",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "peptides",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "peptides",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "neurodegenerative",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "neurodegenerative",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "alzheimer",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "alzheimer",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "neurodegenerative",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "neurodegenerative",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "alzheimer",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "alzheimer",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "neurodegenerative",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "neurodegenerative",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "alzheimer",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "alzheimer",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "alzheimer",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "alzheimer",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "fitness",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.4
        },
        {
            "source": "fitness",
            "target": "being",
            "weight": 0.4
        },
        {
            "source": "chimpanzee",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "chimpanzee",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "evolved",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.4
        },
        {
            "source": "evolved",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.4
        },
        {
            "source": "chimpanzees",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "chimpanzees",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "evolution",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "evolution",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "apoe",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "apoe",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "chimpanzee",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "chimpanzee",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "evolved",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "evolved",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "chimpanzees",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "chimpanzees",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "evolution",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "evolution",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "apoe",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "apoe",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "lipid",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "lipid",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "primates",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "primates",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "erectus",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "erectus",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "endurance",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "endurance",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "lifespans",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.4
        },
        {
            "source": "lifespans",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.4
        },
        {
            "source": "paleolithic",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "paleolithic",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "lifespans",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "lifespans",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "paleolithic",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "paleolithic",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "lifespans",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "lifespans",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "paleolithic",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "paleolithic",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "elderly",
            "target": "Theoretical Frameworks and Longevity Models",
            "weight": 0.2
        },
        {
            "source": "elderly",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 0.2
        },
        {
            "source": "lifespans",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "lifespans",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "biochemistry",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "biochemistry",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "neuroproteomics",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "neuroproteomics",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "metabolomics",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "metabolomics",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "biomarker",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "biomarker",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "biomarker",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "biochemistry",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "biochemistry",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "biochemistry",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "neuroproteomics",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "neuroproteomics",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "neuroproteomics",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "proteomics",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "proteomics",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "proteomics",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "metabolomics",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "metabolomics",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "metabolomics",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "schizophrenia",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "schizophrenia",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "neurodegeneration",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "neurodegeneration",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "glycolysis",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "glycolysis",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "glycolytic",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 0.2
        },
        {
            "source": "glycolytic",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "schizophrenia",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "schizophrenia",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "schizophrenia",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "neurodegeneration",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "neurodegeneration",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "neurodegeneration",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "glycolysis",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "glycolysis",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "glycolysis",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "glycolytic",
            "target": "Pharmacological and Molecular Interventions",
            "weight": 0.2
        },
        {
            "source": "glycolytic",
            "target": "Anti",
            "weight": 0.2
        },
        {
            "source": "glycolytic",
            "target": "aging Pharmacology",
            "weight": 0.2
        },
        {
            "source": "schizophrenia",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "schizophrenia",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "neurodegeneration",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "neurodegeneration",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "glycolysis",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "glycolysis",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "glycolytic",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "glycolytic",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "gdp",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "gdp",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "deaths",
            "target": "Environmental and Social Wellbeing",
            "weight": 0.2
        },
        {
            "source": "deaths",
            "target": "Environmental Exposures and Aging",
            "weight": 0.2
        },
        {
            "source": "genetic",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "genetic",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "genetic",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "genetic",
            "target": "Biomarkers and Predictive Indicators of Longevity",
            "weight": 1
        },
        {
            "source": "genetic",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 0.2
        },
        {
            "source": "genes",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "genetic",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 0.2
        },
        {
            "source": "genes",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.2
        },
        {
            "source": "lifespan",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.2
        },
        {
            "source": "genetic",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 0.2
        },
        {
            "source": "genes",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "genetic",
            "target": "Biomarker Discovery",
            "weight": 0.2
        },
        {
            "source": "genetic",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 0.2
        },
        {
            "source": "genes",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "genes",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "genetic",
            "target": "Geroscience",
            "weight": 0.2
        },
        {
            "source": "genetic",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 0.2
        },
        {
            "source": "genes",
            "target": "Technological Advancements in Longevity",
            "weight": 0.2
        },
        {
            "source": "genes",
            "target": "Emerging Technologies, Big Data, and AI in Research",
            "weight": 0.2
        },
        {
            "source": "genetic",
            "target": "Technological Advancements in Longevity",
            "weight": 0.2
        },
        {
            "source": "genetic",
            "target": "Emerging Technologies, Big Data, and AI in Research",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Technological Advancements in Longevity",
            "weight": 0.2
        },
        {
            "source": "longevity",
            "target": "Emerging Technologies, Big Data, and AI in Research",
            "weight": 0.2
        },
        {
            "source": "sir2",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "adipogenesis",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.2
        },
        {
            "source": "adipogenesis",
            "target": "Genomic Instability and Aging",
            "weight": 0.2
        },
        {
            "source": "lifespans",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "lifespans",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "cytochrome",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "cytochrome",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "jellyfish",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "jellyfish",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "oxidase",
            "target": "Principles and Mechanisms of Aging",
            "weight": 0.4
        },
        {
            "source": "oxidase",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 0.2
        },
        {
            "source": "lifespans",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "cytochrome",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "jellyfish",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "oxidase",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 0.2
        },
        {
            "source": "age",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "age",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "motivation",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "motivation",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "motivational",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "motivational",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "motivational",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "motivational",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "age",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "age",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "motivation",
            "target": "Healthy Aging",
            "weight": 0.4
        },
        {
            "source": "motivation",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "health",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "health",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "motivational",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "motivational",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "age",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "age",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "motivation",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well",
            "weight": 0.2
        },
        {
            "source": "motivation",
            "target": "being",
            "weight": 0.2
        },
        {
            "source": "diabetes",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "diabetes",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "klotho",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "klotho",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "entropy",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "entropy",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "human",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "human",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "generation",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "generation",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "biothermodynamics",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "biothermodynamics",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "entropy",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "entropy",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "human",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "human",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "generation",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "generation",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "biothermodynamics",
            "target": "Healthy Aging",
            "weight": 0.2
        },
        {
            "source": "biothermodynamics",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 0.2
        },
        {
            "source": "athletics",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.4
        },
        {
            "source": "athletics",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.4
        },
        {
            "source": "athletic",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.6000000000000001
        },
        {
            "source": "athletic",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.6000000000000001
        },
        {
            "source": "cardiopulmonary",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "cardiopulmonary",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "athlete",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "athlete",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "athleticism",
            "target": "Lifestyle and Dietary Interventions",
            "weight": 0.2
        },
        {
            "source": "athleticism",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 0.2
        },
        {
            "source": "Principles and Mechanisms of Aging",
            "target": "Cellular Senescence and Aging",
            "weight": 1
        },
        {
            "source": "Principles and Mechanisms of Aging",
            "target": "DNA Repair Mechanisms and Aging",
            "weight": 1
        },
        {
            "source": "Principles and Mechanisms of Aging",
            "target": "Mitochondrial Dysfunction and Longevity",
            "weight": 1
        },
        {
            "source": "Principles and Mechanisms of Aging",
            "target": "Epigenetic Regulation of Aging",
            "weight": 1
        },
        {
            "source": "Principles and Mechanisms of Aging",
            "target": "Inflammation and Autophagy in Aging",
            "weight": 1
        },
        {
            "source": "Principles and Mechanisms of Aging",
            "target": "Genomic Instability and Aging",
            "weight": 1
        },
        {
            "source": "Principles and Mechanisms of Aging",
            "target": "Altered Intercellular Communication",
            "weight": 1
        },
        {
            "source": "Theoretical Frameworks and Longevity Models",
            "target": "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
            "weight": 1
        },
        {
            "source": "Theoretical Frameworks and Longevity Models",
            "target": "Evolutionary Perspectives on Longevity",
            "weight": 1
        },
        {
            "source": "Biomarkers and Predictive Indicators of Longevity",
            "target": "Genetic Biomarkers and Epigenetic Discoveries",
            "weight": 1
        },
        {
            "source": "Biomarkers and Predictive Indicators of Longevity",
            "target": "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
            "weight": 1
        },
        {
            "source": "Biomarkers and Predictive Indicators of Longevity",
            "target": "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
            "weight": 1
        },
        {
            "source": "Biomarkers and Predictive Indicators of Longevity",
            "target": "Biomarker Discovery",
            "weight": 1
        },
        {
            "source": "Biomarkers and Predictive Indicators of Longevity",
            "target": "Omics in Medicine: Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
            "weight": 1
        },
        {
            "source": "Geroscience",
            "target": "Definition and Scope of Geroscience",
            "weight": 1
        },
        {
            "source": "Geroscience",
            "target": "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
            "weight": 1
        },
        {
            "source": "Geroscience",
            "target": "Interdisciplinary Approaches within Geroscience",
            "weight": 1
        },
        {
            "source": "Pharmacological and Molecular Interventions",
            "target": "Anti-aging Pharmacology",
            "weight": 1
        },
        {
            "source": "Pharmacological and Molecular Interventions",
            "target": "Senolytic Therapies and Hormonal Interventions",
            "weight": 1
        },
        {
            "source": "Pharmacological and Molecular Interventions",
            "target": "Peptide Therapies and Pharmaceutical Innovations",
            "weight": 1
        },
        {
            "source": "Lifestyle and Dietary Interventions",
            "target": "Nutritional Interventions for Age-related Diseases and Cellular Repair",
            "weight": 1
        },
        {
            "source": "Lifestyle and Dietary Interventions",
            "target": "Microbiome and Longevity",
            "weight": 1
        },
        {
            "source": "Lifestyle and Dietary Interventions",
            "target": "Lifestyle Interventions for Extended Healthspan (Diet Types)",
            "weight": 1
        },
        {
            "source": "Lifestyle and Dietary Interventions",
            "target": "Mind-Body Approaches (Meditation, Yoga)",
            "weight": 1
        },
        {
            "source": "Lifestyle and Dietary Interventions",
            "target": "Physical Fitness and Health(Sports and Exercise)",
            "weight": 1
        },
        {
            "source": "Lifestyle and Dietary Interventions",
            "target": "Rest and Sleep",
            "weight": 1
        },
        {
            "source": "Regenerative and Restorative Therapies",
            "target": "Regenerative Medicine (Stem Cell Therapy, Tissue Engineering)",
            "weight": 1
        },
        {
            "source": "Regenerative and Restorative Therapies",
            "target": "Bioprinting and Tissue Engineering for Regenerative Medicine",
            "weight": 1
        },
        {
            "source": "Physical and Cognitive Activities",
            "target": "Exercise Regimens and Physical Activity Guidelines for the Elderly",
            "weight": 1
        },
        {
            "source": "Physical and Cognitive Activities",
            "target": "Mental Health, Cognitive Fitness, and Brain Health Training",
            "weight": 1
        },
        {
            "source": "Preventive Medicine",
            "target": "Comprehensive Overview and Role of Preventive Medicine in Longevity",
            "weight": 1
        },
        {
            "source": "Preventive Medicine",
            "target": "Vaccination Strategies and Epidemiology for the Elderly",
            "weight": 1
        },
        {
            "source": "Preventive Medicine",
            "target": "Screening for Early Interventions and Disease Prevention",
            "weight": 1
        },
        {
            "source": "Preventive Medicine",
            "target": "Evidence-Based Practices and Guidelines for Preventive Health Care",
            "weight": 1
        },
        {
            "source": "Public Health Measures and Screening",
            "target": "Vaccination Strategies and Epidemiology for the Elderly",
            "weight": 1
        },
        {
            "source": "Public Health Measures and Screening",
            "target": "Screening for Early Interventions and Disease Prevention",
            "weight": 1
        },
        {
            "source": "Environmental and Social Wellbeing",
            "target": "Environmental Exposures and Aging",
            "weight": 1
        },
        {
            "source": "Environmental and Social Wellbeing",
            "target": "Social Connections, Community Engagement, and Healthy Living Spaces",
            "weight": 1
        },
        {
            "source": "Healthy Aging",
            "target": "Strategies for Promoting Longevity and Wellness in Aging",
            "weight": 1
        },
        {
            "source": "Healthy Aging",
            "target": "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well-being",
            "weight": 1
        },
        {
            "source": "Healthy Aging",
            "target": "Preventative Healthcare and Routine Practices for Aging Population",
            "weight": 1
        },
        {
            "source": "Clinical Trials and Innovative Research",
            "target": "Phase I-IV Trials of Age-related Treatments",
            "weight": 1
        },
        {
            "source": "Clinical Trials and Innovative Research",
            "target": "Adaptive Trial Design and Biomarkers in Longevity Trials",
            "weight": 1
        },
        {
            "source": "Clinical Trials and Innovative Research",
            "target": "Omics Technologies:Application of Omics Data in Clinical Trial Design and Personalized Medicine",
            "weight": 1
        },
        {
            "source": "Case Reports on Longevity",
            "target": "Exceptional Aging and Interventions in Case Studies",
            "weight": 1
        },
        {
            "source": "Case Reports on Longevity",
            "target": "The Role of Resilience and Impact of Interventions on Healthspan",
            "weight": 1
        },
        {
            "source": "Clinical Implications",
            "target": "Integrating cutting-edge research into practice: Bridging the gap between longevity studies and clinical applications.",
            "weight": 1
        },
        {
            "source": "Clinical Implications",
            "target": "The impact of biomarker discovery on diagnosis, treatment, and preventative care.",
            "weight": 1
        },
        {
            "source": "Clinical Implications",
            "target": "Personalized medicine in the context of aging: Utilizing genetic, proteomic, and metabolomic insights to tailor interventions.",
            "weight": 1
        },
        {
            "source": "Health Policy and Elderly Care",
            "target": "Policy Evaluations and Models of Care for the Elderly",
            "weight": 1
        },
        {
            "source": "Health Policy and Elderly Care",
            "target": "Geriatric Workforce Challenges and Economic Analyses",
            "weight": 1
        },
        {
            "source": "Ethical and Educational Aspects",
            "target": "Ethics of Life Extension and Public Education on Aging",
            "weight": 1
        },
        {
            "source": "Ethical and Educational Aspects",
            "target": "Gender Dimension and Public Perceptions of Anti-aging Technologies",
            "weight": 1
        },
        {
            "source": "Technological Advancements in Longevity",
            "target": "Emerging Technologies, Big Data, and AI in Research",
            "weight": 1
        },
        {
            "source": "Technological Advancements in Longevity",
            "target": "Wearable Devices and Health Monitoring Technologies",
            "weight": 1
        },
        {
            "source": "Future Prospects and Emerging Approaches",
            "target": "Senolytic Therapies and Cellular Reprogramming",
            "weight": 1
        },
        {
            "source": "Future Prospects and Emerging Approaches",
            "target": "Educational and Promotional Tools for Longevity Practices",
            "weight": 1
        }
    ]
}
)
  Api.post('/get_category_list',
    [
        "Principles and Mechanisms of Aging",
        "Cellular Senescence and Aging",
        "DNA Repair Mechanisms and Aging",
        "Mitochondrial Dysfunction and Longevity",
        "Epigenetic Regulation of Aging",
        "Inflammation and Autophagy in Aging",
        "Genomic Instability and Aging",
        "Altered Intercellular Communication",
        "Theoretical Frameworks and Longevity Models",
        "Theories of Aging (Free Radical Theory, Wear and Tear Theory)",
        "Evolutionary Perspectives on Longevity",
        "Biomarkers and Predictive Indicators of Longevity",
        "Genetic Biomarkers and Epigenetic Discoveries",
        "Proteomic, Metabolomic Biomarkers, and Telomere Dynamics",
        "Blood Biomarkers: Their role in Diagnostics and Monitoring of Aging Processes",
        "Biomarker Discovery",
        "Omics in Medicine:Integration of Genomics, Epigenomics, Proteomics, and Metabolomics in Aging Research",
        "Geroscience",
        "Definition and Scope of Geroscience",
        "Geroscience as a Bridge Between Basic Aging Biology and Clinical Application",
        "Interdisciplinary Approaches within Geroscience",
        "Pharmacological and Molecular Interventions",
        "Anti-aging Pharmacology",
        "Senolytic Therapies and Hormonal Interventions",
        "Peptide Therapies and Pharmaceutical Innovations",
        "Lifestyle and Dietary Interventions",
        "Nutritional Interventions for Age-related Diseases and Cellular Repair",
        "Microbiome and Longevity",
        "Lifestyle Interventions for Extended Healthspan (Diet Types)",
        "Mind-Body Approaches (Meditation, Yoga)",
        "Physical Fitness and Health(Sports and Exercise)",
        "Rest and Sleep",
        "Regenerative and Restorative Therapies",
        "Regenerative Medicine (Stem Cell Therapy, Tissue Engineering)",
        "Bioprinting and Tissue Engineering for Regenerative Medicine",
        "Physical and Cognitive Activities",
        "Exercise Regimens and Physical Activity Guidelines for the Elderly",
        "Mental Health, Cognitive Fitness, and Brain Health Training",
        "Preventive Medicine",
        "Comprehensive Overview and Role of Preventive Medicine in Longevity",
        "Vaccination Strategies and Epidemiology for the Elderly",
        "Screening for Early Interventions and Disease Prevention",
        "Evidence-Based Practices and Guidelines for Preventive Health Care",
        "Public Health Measures and Screening",
        "Vaccination Strategies and Epidemiology for the Elderly",
        "Screening for Early Interventions and Disease Prevention",
        "Environmental and Social Wellbeing",
        "Environmental Exposures and Aging",
        "Social Connections, Community Engagement, and Healthy Living Spaces",
        "Healthy Aging",
        "Strategies for Promoting Longevity and Wellness in Aging",
        "Integrative Approaches to Aging: Lifestyle, Diet, and Mental Well-being",
        "Preventative Healthcare and Routine Practices for Aging Population",
        "Clinical Trials and Innovative Research",
        "Phase I-IV Trials of Age-related Treatments",
        "Adaptive Trial Design and Biomarkers in Longevity Trials",
        "Omics Technologies:Application of Omics Data in Clinical Trial Design and Personalized Medicine",
        "Case Reports on Longevity",
        "Exceptional Aging and Interventions in Case Studies",
        "The Role of Resilience and Impact of Interventions on Healthspan",
        "Clinical Implications",
        "Integrating cutting-edge research into practice: Bridging the gap between longevity studies and clinical applications.",
        "The impact of biomarker discovery on diagnosis, treatment, and preventative care.",
        "Personalized medicine in the context of aging: Utilizing genetic, proteomic, and metabolomic insights to tailor interventions.",
        "Health Policy and Elderly Care",
        "Policy Evaluations and Models of Care for the Elderly",
        "Geriatric Workforce Challenges and Economic Analyses",
        "Ethical and Educational Aspects",
        "Ethics of Life Extension and Public Education on Aging",
        "Gender Dimension and Public Perceptions of Anti-aging Technologies",
        "Technological Advancements in Longevity",
        "Emerging Technologies, Big Data, and AI in Research",
        "Wearable Devices and Health Monitoring Technologies",
        "Future Prospects and Emerging Approaches",
        "Senolytic Therapies and Cellular Reprogramming",
        "Educational and Promotional Tools for Longevity Practices"
    ]  
  )

};

export default useMoch;
