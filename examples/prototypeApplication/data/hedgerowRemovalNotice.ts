import {PrototypeApplication} from '../../../types/schemas/prototypeApplication';

const version = process.env['VERSION'] || '@next';

export const hedgerowRemovalNoticePrototype: PrototypeApplication = {
    "applicationType": "hedgerowRemovalNotice",
    "data": {
        "user": {
          "role": "applicant"
        },
        "applicant": {
          "name": {
            "first": "Edith",
            "last": "Cavell"
          },
          "email": "edith@cavell.com",
          "phone": {
            "primary": "7946 0000 "
          },
          "address": {
            "sameAsSiteAddress": true
          },
          "siteContact": {
            "role": "applicant"
          },
          "ownership": {
            "interest": "owner"
          }
        },
        "property": {
          "address": {
            "latitude": 51.519019,
            "longitude": -0.0581096,
            "x": 534828.78,
            "y": 181797.98,
            "title": "THE ROYAL LONDON HOSPITAL, PO BOX 59, 192-206, WHITECHAPEL ROAD, LONDON",
            "source": "Ordnance Survey",
            "uprn": "010092817034",
            "usrn": "22701339",
            "pao": "192",
            "paoEnd": "206",
            "sao": "PO BOX 59",
            "street": "WHITECHAPEL ROAD",
            "town": "LONDON",
            "postcode": "E1 1BB",
            "singleLine": "THE ROYAL LONDON HOSPITAL, PO BOX 59, 192-206, WHITECHAPEL ROAD, LONDON, TOWER HAMLETS, E1 1BB"
          },
          "localAuthorityDistrict": [
            "Barnet",
            "Tower Hamlets"
          ],
          "region": "London",
          "type":  "other.unsupported",
          "planning": {
            "sources": [],
            "designations": []
          }
        },
        "application": {
          "fee": {
            "notApplicable": true
          },
          "declaration": {
            "accurate": true,
            "connection": {
              "value": "none"
            }
          }
        },
        "proposal": {
          "description": "Not provided",
          "boundary": {
            "site": {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [-0.058487935317555, 51.5192064350141],
                    [-0.0582234206748119, 51.518701449703],
                    [-0.0576478374094721, 51.5188470408787],
                    [-0.0579038323578537, 51.5193464591656],
                    [-0.058487935317555, 51.5192064350141]
                  ]
                ]
              },
              "properties": {
                "label": "1",
                "area.hectares": 0.252636,
                "area.squareMetres": 2526.36,
                "planx_user_action": "Drew a custom boundary"
              }
            },
            "area": {
              "squareMetres": 2526.36
            }
          }
        },
      "preAssessment": [
        {
          "value": "Planning permission / No result"
        }
      ],
      "responses": [
        {
          "question": "Is the property in [COUNCIL NAME]?",
          "responses": [
            {
              "value": "Yes"
            }
          ],
          "metadata": {
            "autoAnswered": true,
            "sectionName": "The property"
          }
        },
        {
          "question": "What type of property is it?",
          "responses": [
            {
              "value": "Something else"
            }
          ],
          "metadata": {
            "autoAnswered": true,
            "sectionName": "The property"
          }
        },
        {
          "question": "Which of these best describes the use of the property?",
          "responses": [
            {
              "value": "Other"
            }
          ],
          "metadata": {
            "autoAnswered": true,
            "sectionName": "The property"
          }
        },
        {
          "question": "What type of property is it?",
          "responses": [
            {
              "value": "No, none of these"
            }
          ],
          "metadata": {
            "sectionName": "The property"
          }
        },
        {
          "question": "What type of property is it?",
          "responses": [
            {
              "value": "town hall"
            }
          ],
          "metadata": {
            "sectionName": "The property"
          }
        },
        {
          "question": "State the reasons for the proposed removal of hedgerow(s)",
          "responses": [
            {
              "value": "blocking path"
            }
          ],
          "metadata": {
            "sectionName": "Your application"
          }
        },
        {
          "question": "What is the total length of hedgerow to be removed?",
          "responses": [
            {
              "value": "20"
            }
          ],
          "metadata": {
            "sectionName": "Your application"
          }
        },
        {
          "question": "Is any of the removed hedgerows less than 30 years old?",
          "responses": [
            {
              "value": "No"
            }
          ],
          "metadata": {
            "sectionName": "Your application"
          }
        },
        {
          "question": "Did you get any pre-application advice from the council before making this application?",
          "responses": [
            {
              "value": "No"
            }
          ],
          "metadata": {
            "sectionName": "Your application"
          }
        },
        {
          "question": "In the 3 months before making this application, did you use our free guidance service to find out if you need planning permission?",
          "responses": [
            {
              "value": "No"
            }
          ],
          "metadata": {
            "sectionName": "Your application"
          }
        },
        {
          "question": "Are you applying on behalf of someone else?",
          "responses": [
            {
              "value": "No"
            }
          ],
          "metadata": {
            "sectionName": "About you"
          }
        },
        {
          "question": "Your contact details",
          "responses": [
            {
              "value": "Edith Cavell 7946 0000  edith@cavell.com"
            }
          ],
          "metadata": {
            "sectionName": "About you"
          }
        },
        {
          "question": "Is your contact address the same as the property address?",
          "responses": [
            {
              "value": "Yes"
            }
          ],
          "metadata": {
            "sectionName": "About you"
          }
        },
        {
          "question": "What is your relation to the land?",
          "responses": [
            {
              "value": "I am/we are the owner(s) of the freehold of the land concerned"
            }
          ],
          "metadata": {
            "sectionName": "About you"
          }
        },
        {
          "question": "Can a planning officer see the site from public land?",
          "responses": [
            {
              "value": "Yes, it's visible from the road or somewhere else"
            }
          ],
          "metadata": {
            "sectionName": "About you"
          }
        },
        {
          "question": "We may need to visit the site to assess the application. If we do, who should we contact to arrange the visit?",
          "responses": [
            {
              "value": "The applicant"
            }
          ],
          "metadata": {
            "sectionName": "About you"
          }
        },
        {
          "question": "Which Local Planning authority is it?",
          "responses": [
            {
              "value": "Barnet"
            }
          ],
          "metadata": {
            "sectionName": "Review and confirm"
          }
        },
        {
          "question": "Connections with Barnet Council",
          "responses": [
            {
              "value": "None of the above apply to me"
            }
          ],
          "metadata": {
            "sectionName": "Review and confirm"
          }
        },
        {
          "question": "I confirm that:",
          "responses": [
            {
              "value": "The information contained in this application is truthful, accurate and complete, to the best of my knowledge"
            }
          ],
          "metadata": {
            "sectionName": "Review and confirm"
          }
        }
      ],
      "files": [
        {
          "name": "https://api.editor.planx.dev/file/private/sm4vq3bn/Screenshot%202025-01-30%20at%2013.48.33.png",
          "type": [ "hedgerowsInformation"]
        }
      ],
      "metadata": {
        "id": "d12e9ced-3b53-43a6-8987-792d25ad358a",
        "organisation": "BBD",
        "submittedAt": "2025-02-17T12:48:12.784Z",
        "source": "PlanX",
        "service": {
          "flowId": "4a95512b-c0b2-4891-b433-441ae5a4d132",
          "url": "https://editor.planx.uk/templates/submit-a-hedgerow-removal-notice-template/published",
          "files": {
            "required": [ "hedgerowsInformation"],
            "recommended": ["relevantInformation"],
            "optional": []
          },
          "fee": {
            "notApplicable": true
          }
        },
        "schema": `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/application.json`
      }
    }
};