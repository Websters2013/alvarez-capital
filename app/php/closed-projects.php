<?php

$loadedCount = $_GET['loadedCount'];

if ( $loadedCount == 4 ){


    $json_data = '{
        "has_items": 1,
                    "items":[

                        {
                            "href": "#",
                            "projectName": "Name1",
                            "financingObjective": "500.000 €",
                            "annualInterestRate": "5%",
                            "annualInterestRate2": "54 jours",
                            "src": "pic/closed-project1.jpg",
                            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda culpa cupiditate deserunt dolor earum et expedita facilis fugiat, illo magnam modi obcaecati officia perspiciatis, quod recusandae, sint unde velit."
                        },
                        {
                            "href": "#",
                            "projectName": "Name2",
                            "financingObjective": "500.000 €",
                            "annualInterestRate": "5%",
                            "annualInterestRate2": "54 jours",
                            "src": "pic/closed-project1.jpg",
                            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda culpa cupiditate deserunt dolor earum et expedita facilis fugiat, illo magnam modi obcaecati officia perspiciatis, quod recusandae, sint unde velit."
                        },
                        {
                             "href": "#",
                            "projectName": "Name3",
                            "financingObjective": "500.000 €",
                            "annualInterestRate": "5%",
                            "annualInterestRate2": "54 jours",
                            "src": "pic/closed-project1.jpg",
                            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda culpa cupiditate deserunt dolor earum et expedita facilis fugiat, illo magnam modi obcaecati officia perspiciatis, quod recusandae, sint unde velit."
                        },
                        {
                             "href": "#",
                            "projectName": "Name4",
                            "financingObjective": "500.000 €",
                            "annualInterestRate": "5%",
                            "annualInterestRate2": "54 jours",
                            "src": "pic/closed-project1.jpg",
                            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda culpa cupiditate deserunt dolor earum et expedita facilis fugiat, illo magnam modi obcaecati officia perspiciatis, quod recusandae, sint unde velit."
                        }

                    ]
    }';

} else {


    $json_data = '{

        "has_items": 0,
                    "items":[

                        {
                             "href": "#",
                            "projectName": "Name1",
                            "financingObjective": "500.000 €",
                            "annualInterestRate": "5%",
                            "annualInterestRate2": "54 jours",
                            "src": "pic/closed-project1.jpg",
                            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda culpa cupiditate deserunt dolor earum et expedita facilis fugiat, illo magnam modi obcaecati officia perspiciatis, quod recusandae, sint unde velit."
                        },
                        {
                             "href": "#",
                            "projectName": "Name2",
                            "financingObjective": "500.000 €",
                            "annualInterestRate": "5%",
                            "annualInterestRate2": "54 jours",
                            "src": "pic/closed-project1.jpg",
                            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda culpa cupiditate deserunt dolor earum et expedita facilis fugiat, illo magnam modi obcaecati officia perspiciatis, quod recusandae, sint unde velit."
                        }

                    ]
        }';

};
echo $json_data;
exit;
?>
