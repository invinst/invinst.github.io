var config = {
    style: 'mapbox://styles/invisibleinstitute/cl0cvux6j000s15qgl89uw3by',
    accessToken: 'pk.eyJ1IjoiaW52aXNpYmxlaW5zdGl0dXRlIiwiYSI6ImNrejJ6cnF5ZDAxdWIyd216cWJramZsN24ifQ.BLLN-abgTUSzlsSZixlTWA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Chicago to Guantánamo: Connections in an Ecosystem of Violence',
    subtitle: '',
    byline: '',
    footer: 'Maira Khwaja, Marie Mendoza, Maheen Khan<br/>chicagopolicetorturearchive.com<br/>Invisible Institute, 2022<br/><br/>'
    + 'Photo credits:<br/>People’s Law Office, chicagopolicetorturearchive.org<br/> The Guardian<br/> Aaron Bulnes<br/> Patricia Evans<br/> LinkedIn',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: 'Jon Burge and a generation of police officers enlist in the US Military for the Vietnam War.<br/><br/> ' + 
            'In 1968, Jon Burge volunteered for duty in the Vietnam War, where he provided security for convoys and basecamps ' + 
            'as a military police officer, and served a tour as a provost marshal investigator. Vietnam was his second service ' + 
            '(he had previously worked as military police in South Korea) and he was assigned to the Ninth Military ' +
            'Police Company of the Ninth Infantry division.', 
            location: {
                center: [-3.43695, 37.59621],
                zoom: 1.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'intro-coordinates',
                     opacity: 1
                 },
                 {
                     layer: 'country-label',
                     opacity: 0
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'country-label',
                     opacity: 1
                 }
            ]
        },
        {
            id: 'vietnam',
            alignment: 'left',
            hidden: false,
            title: 'Vietnam (1955-1975)',
            image: '',
            description: 'Jon Burge, a commander who oversaw the torture of more than 100 Black ' +
            'people, and a generation of future police officers enlist in the U.S. Military for the ' +
            'Vietnam War.<br/><br/>Burge enlisted in the army reserve in 1966 and began six years of ' +
            'service, including two years of active duty. He spent eight weeks at a military police ' +
            '(MP) school in Georgia. He received some training at Fort Benning, Georgia. He served as ' +
            'an MP in South Korea, and in 1968 he volunteered for duty a second time, in Vietnam, and ' +
            'was assigned to the Ninth Military Police Company of the Ninth Infantry Division.', 
            location: {
                center: [101.70440, 16.34775],
                zoom: 5.28,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'country-boundaries',
                     opacity: 1
                 },
                 {
                     layer: 'intro-coordinates',
                     opacity: 1
                 },
            ],
            onChapterExit: [
                 {
                     layer: 'country-boundaries',
                     opacity: 0
                 },
            ]
        },
        {
            id: 'dong-tam-base-camp',
            alignment: 'left',
            hidden: false,
            title: 'Dong Tamp Base Camp',
            image: './images/blk.box1.jpg',
            description: 'During his service, Burge spent time escorting convoys, providing ' +
            'security for forward support bases, supervising security for the divisional central base ' +
            'camp in Dong Tam, and serving a tour as a provost marshal investigator.<br/><br/>As an MP, he ' +
            'likely learned or observed a torture technique that he would later reproduce in Chicago: ' +
            'wiring Vietnamese prisoners to a black box and turning a crank that generates an electric ' +
            'shock. American soldiers in Vietnam called this “the Bell telephone hour,” where they would ' +
            'shock prisoners with a hand-cranked army field phone.<br/><br/>Burge denied knowing of torture in ' +
            'Vietnam, but many of his peers from the Ninth Military Police Company described the practice ' +
            'in detail to reporter John Conroy at the <i>Chicago Reader</i>.', 
            location: {
                center: [106.30681, 10.39238],
                zoom: 8.00,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'intro-coordinates',
                     opacity: 1
                 },
                 {
                     layer: 'dongtam',
                     opacity: 1
                 },
            ],
            onChapterExit: [
                {
                    layer: 'dongtam',
                    opacity: 0
                },
            ]
        },
        {
            id: 'chicago1',
            alignment: 'right',
            hidden: false,
            title: 'Chicago',
            image: '',
            description: 'Burge returned to his childhood home in Chicago in 1969. He grew up in an ' +
            'all-white, post-World War II housing development on the southeast side, which was now ' +
            'rapidly changing demographics. He graduated from Bowen High School, where he was active ' +
            'in ROTC, in 1965. The school was 93% white when he graduated; seven years later, it was ' +
            '14% white.<br/><br/>In 1970, Burge joined the Chicago Police Department (CPD), where he rose in power ' + 
            'to become Commander of Area 2. At least seventeen of his associates were also veterans of the U.S. ' +
            'military, most from the Vietnam War.',
            location: {
                center: [-87.56900, 41.72086],
                zoom: 13.19,
                pitch: 60.00,
                bearing: -4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'luella-address',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'luella-address',
                    opacity: 0
             ,   }
            ]
        },
        {
            id: 'area2-1982',
            alignment: 'left',
            hidden: false,
            title: 'Area 2 Police Station (1982)',
            image: './images/wilson6.face.jpg',
            description: 'Andrew Wilson (pictured) and Jackie Wilson, two of the earliest known survivors of torture at ' +
            'the hands of Chicago Police officer Jon Burge. They were arrested in 1982 on a tip—which was ' +
            'also coerced through torture— that the Wilsons killed Chicago Police officers William Fahey and ' +
            'Richard O\'Brien. They were tortured into confession; both brothers were connected to a ' +
            'hand-cranked generator and given electric shocks. Their legal fights lasted decades: Andrew Wilson ' +
            'ultimately died in prison in 2007. Jackie Wilson was released in 2018 and granted a certificate ' +
            'of innocence in December 2020.',
            location: {
                center: [-87.60485, 41.72941],
                zoom: 18.38,
                pitch: 54,
                bearing: 6.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'area-2-1982-building',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'area-2-1982-building',
                    opacity: 0
                },
            ]
        },
        {
            id: 'area2-1983',
            alignment: 'right',
            hidden: false,
            title: 'Area 2 Police Station (1983)',
            image: './images/Darrell-Drawing.png',
            description: 'Darrell Cannon, tortured in 1983 and incarcerated for 24 years, testified that ' +
            'the officers played a terrifying game of Russian Roulette on him, where they would seemingly ' +
            'load a shotgun and stick it in his mouth, forcing him to pull the trigger. The officers then pulled ' +
            'down his pants and repeatedly shocked him in the genitals with a cattle prod. “For me this was ' +
            'the most sadistic act ever performed,” he told journalist Amanda Rivkin in 2016. “The feeling of ' +
            'it is something that is indescribable. I still live with it today.”<br/><br/> Sgt. John Byrne and Detectives ' +
            'Peter Dignan, who worked closely with Burge and were both Marine Corps veterans, participated in ' +
            'torturing and coercing Cannon\'s murder confession. Cannon was exonerated in 2004 and freed in 2007. His case ' +
            'became a touchpoint for other Burge-related cases. Today, Cannon organizes fellow survivors in the ' +
            'reparations and torture justice movement.',
            location: {
                center: [-87.60223, 41.69216],
                zoom: 17.4,
                pitch: 54,
                bearing: 1.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'area-2-1983-building',
                    opacity: 1
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'chicago2',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './images/Area+2+Officers.png',
            description: 'Over the next two decades, Burge and his affiliates tortured more than 125 ' +
            'Black people. Aided and abetted by prosecutors, city officials, and the Chicago Police ' +
            'Department, these officers routinely framed innocent Black men for crimes they didn’t commit. ' +
            'Often, these crimes were high profile, with an expectation and demand on police to catch the ' +
            'person responsible.<br/><br/>The Illinois Torture and Relief Commission continues to investigate ' +
            'a backlog of more than 540 claims of torture, within and beyond Burge’s network.',
            location: {
                center: [-87.79255, 41.84618],
                zoom: 9.89,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'intro-coordinates',
                    opacity: 1
                },
                {
                    layer: 'chicago-border',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'chicago-border',
                    opacity: 0
                }
            ]
        },
        {
            id: 'area3-1988-1991',
            alignment: 'right',
            hidden: false,
            title: 'Area 3 Police Station (1988-1991)',
            image: '',
            description: 'Burge moved to Area 3 in 1988.<br/><br/>One of Burge’s contemporaries, <b>Richard Zuley</b>, ' +
            'also joined the Chicago Police in 1970. Zuley,  who is most infamous for his direct link ' +
            'to torture at Guantanamo, took a leave of absence from CPD from 1982-1987 to work in counterterrorism ' +
            'for the U.S. Navy. It’s unclear what his counterterrorism work included, where he was ' +
            'deployed, or how it may have influenced his behavior in Chicago.',
            location: {
                center: [-87.694698, 41.82254],
                zoom: 16,
                pitch: 41,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'area-3-1988-building',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'area-3-1988-building',
                    opacity: 0
                }
            ]
        },
        {
            id: 'area3-1992',
            alignment: 'left',
            hidden: false,
            title: 'Area 3 Police Station (1992- )',
            image: './images/Zuley-theGuardian-map.jpeg',
            description: 'When Zuley returned to Chicago, he briefly overlapped with Burge on the North Side: ' +
            'Burge in Unit 630, Area 3 (within what is now called Detective Area North), and Zuley in Unit 606, ' +
            'Central Investigations. Burge was fired in 1993, after the Chicago ' +
            'Police Board found that he had abused Andrew Wilson.<br/><br/>Although it is not in official records that ' +
            'they ever worked together, Zuley and Burge shared mutual colleagues. Zuley was seen as an ' +
            'expert in his 25-year career as a detective, investigating high profile crimes like the murder ' +
            'of 7-year old Dantrell Davis.<br/><br/>Over that same career, he tortured at least five people in ' +
            'Chicago. <b>At Area 3, he tortured Lee Harris in 1989, who was once Zuley’s close informant, and Benita ' +
            'Johnson in 1995, whom he handcuffed to a wall for over 24 hours and threatened her family.',
            location: {
                center: [-87.69076, 41.93971],
                zoom: 17,
                pitch: 54,
                bearing: 1.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'area-3-1992-building',
                    opacity: 1
                },
                {
                    layer: 'intro-coordinates',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'area-3-1992-building',
                    opacity: 0
                },
            ]
        },
        {
            id: 'gulf-war-1990',
            alignment: 'right',
            hidden: false,
            title: 'Gulf War (1990-1991)',
            image: '',
            description: 'Like Zuley, younger officers named in torture cases have drifted in and ' +
            'out of military and security work. Kenneth Boudreau, for example, is named in Burge-affiliated ' +
            'and Zuley-affiliated cases.<br/><br/>Boudreau took a leave from the CPD to serve in the Gulf War from ' +
            'September 1990-July 1991. He worked as a Protective Service Officer and Aide to Camp for the ' +
            'Commanding General of Engineer Forces. He has since been named in at least 46 torture claims, ' +
            'thirteen of them alongside now-deceased Michael Kill (between the two of them, 72 people have ' +
            'accused them of using torture; 20 of whom have been exonerated).<br/><br/>At the end of his CPD career, in ' +
            '2014, he was commanding officer in the Gang School Safety Team, which collaborates with Chicago Public ' +
            'Schools, and was a leader in creating the team’s social media surveillance unit. He has not admitted ' +
            'culpability, decades later. In a 2018 interview, Boudreau called the exonerations “a travesty of justice.” ' +
            'Today, he is CEO at Embassy Security Group.',
            location: {
                center: [50.73415, 32.19105],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'gulf-war-1990',
                    opacity: 1
                },
                {
                    layer: 'iraq-kuwait',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'gulf-war-1990',
                    opacity: 0
                },
                {
                    layer: 'iraq-kuwait',
                    opacity: 0
                },
            ]
        },
        {
            id: 'area3again',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './images/Johnny-Plummer-mom.jpg',
            description: 'Recently, in August 2021, one of Boudreau and Kill’s youngest ' +
            'victims of torture and coerced confession, Johnny Plummer, won an appeal of his ' +
            'murder case to the Illinois Appellate Court, after 30 years in prison. He will now ' +
            'be able to present newly discovered evidence in support of his allegations ' +
            'that he was tortured at Area 3 Headquarters.<br/><br/>Plummer testified ' +
            'that in 1991, when he was 15, Boudreau and Kill tortured him into confession at Area 3 ' +
            'police headquarters by hitting him with a flashlight, punching him in the face, ' +
            'handcuffing him to a radiator and ring on the wall, and interrogating him for 39 hours.',
            location: {
                center: [-87.69076, 41.93971],
                zoom: 17,
                pitch: 60,
                bearing: 32.0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'area-3-1992-building',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'area-3-1992-building',
                    opacity: 0
                }
            ]
        },
        {
            id: 'guantanamo-2002-2004',
            alignment: 'right',
            hidden: false,
            title: 'Guantánamo Bay (2002-2004)',
            image: './images/Slahi.jpg',
            description: 'Richard Zuley, on leave from his position at Area 3, worked as a senior ' +
            'interrogator at Guantánamo Bay from 2002-2004.<br/><br/>As described in Spencer Ackerman’s ' +
            'reporting for <i>The Guardian</i>, Zuley tortured ' +
            'Mohamedou Ould Slahi into a confession, using prolonged shackling, family threats, mock ' +
            'executions, extreme temperatures, and sleep deprivation. Zuley befriended Slahi before the ' +
            'interrogation, and then used what he learned to threaten his mother with arrest if he did not confess.',
            location: {
                center: [-75.09254, 19.90224],
                zoom: 16.4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'guantanamo-bay-building',
                    opacity: 1
                },
                {
                    layer: 'guantanamo-area',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'guantanamo-bay-building',
                    opacity: 0
                },
                {
                    layer: 'guantanamo-area',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chicago4-slide-9',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Back in Chicago, Zuley was assigned in 2003 to Burge\'s old position, Commander ' +
            'of Police Unit 630 in Area 3 (within Detective Area North). After his time in Guantánamo and ' +
            'retirement from the CPD in 2007, Zuley worked as senior emergency management coordinator for Cook ' +
            'County Department of Health. Later, he worked for Chicago Department of Aviation as a projects ' +
            'administrator and interim emergency management director until 2017.',
            location: {
                center: [-87.69076, 41.93971],
                zoom: 16,
                pitch: 0.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'area-3-1992-building',
                    opacity: 1
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'zuley-pension',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'At the time of this publication, Zuley collects his pension and lives in Florida.',
            location: {
                center: [-87.69076, 41.93971],
                zoom: 16,
                pitch: 0.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: 'area-3-1992-building',
                    opacity: 0
                }
            ]
        },
        {
            id: 'baghram-air-force',
            alignment: 'left',
            hidden: false,
            title: 'Bagram Air Base, Afghanistan',
            image: '',
            description: 'Meanwhile, in Afghanistan and Iraq, Chicago Police officers in the ' +
            'military reserves took a leave of absence to join the Global War on Terror. By 2014, ' +
            'CPD had more than 300 officers serving on active duty in Operation Enduring Freedom, ' +
            'and more than an additional 100 officers enlisted in the U.S. Military.<br/><br/>Former officers ' +
            'of the CPD’s Special Operations Section (SOS), Randy Jalloway and Tom Walsh, took a leave ' +
            'in September 2002 to work together in Bagram as part of a Field Surgical Team.<br/><br/>SOS became ' +
            'notorious for invading homes without warrants, stealing money, and kidnapping suspects; it was shut down in 2007.',
            location: {
                center: [69.25280, 34.94235],
                zoom: 13,
                pitch: 0.00,
                bearing: 0.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'pol-large',
                    opacity: 0
                },
                {
                    layer: 'bagram',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'pol-large',
                    opacity: 1
                },
                {
                    layer: 'bagram',
                    opacity: 0
                },
            ]
        },
        {
            id: 'stateway-gardens-2003',
            alignment: 'right',
            hidden: false,
            title: 'Stateway Gardens (2003)',
            image: './images/Diane-Bond.jpg',
            description: 'Another crew of officers, the Skullcap Crew — composed of Edwin Utreras, Robert Stegmiller, Christ Savickas, Andrew Schoeff ' +
            'and Joe Seinitz – joined the Chicago Police in the late 1990s and were a widely feared team of officers within ' +
            'the Public Housing South unit. Former residents of now-demolished Stateway Gardens housing have described locking ' +
            'their doors when the crew approached. In 2003, for example, they invaded Diane Bond’s home twice at Stateway ' +
            'Gardens without a warrant, destroyed her altar and belongings, sexually violated her, punched her in the face, ' +
            'and threatened her and her son.',
            location: {
                center: [-87.62373, 41.82763],
                zoom: 15.00,
                pitch: 00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'stateway-gardens',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'stateway-gardens',
                    opacity: 0
                }
            ]
        },
        {
            id: 'alanbar-iraq',
            alignment: 'left',
            hidden: false,
            title: 'Al\'Anbar, Iraq (2007)',
            image: './images/Seinitz-linkedin.png',
            description: 'Though the Skullcap Crew has been named in more than 20 federal lawsuits, all ' +
            'members are still part of the Chicago Police Department —  except for Joe Seinitz. Seinitz retired ' +
            'in 2007 from CPD, and went on to advise the Department of Defense throughout Iraq.<br/><br/>He proudly ' +
            'discloses on his LinkedIn that he led the “CLEAT anti terrorism unit,” and posted photos of his ' +
            'SWAT team that combined Iraqi and American forces to run nighttime “capture kill missions to restore ' +
            'peace” in Al’Anbar, Iraq. Since 2016, Seinitz has described his role at the Department of Defense as “classified.”',
            location: {
                center: [41.53088, 32.88492],
                zoom: 4.41,
                pitch: 00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'intro-coordinates',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'toledo',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'The public does not know which officers have served in the military, and cases of ' +
            'torture, black sites, and disappearances are generally not matters of public knowledge. Neither are ' +
            'routine encounters with police that fit within this mode of policing — one that aids and abets the use ' +
            'of coerced confessions and power with immunity. <br/><br/>In infamous cases ' +
            'of a police killing or torture, backgrounds emerge: officer Eric Stillman, who killed 13-year-old ' +
            'Adam Toledo in 2021, was a Marine in Afghanistan.<br/><br/>Retired detective Dante Servin, who killed 22-year-old ' +
            'Rekia Boyd in 2012, previously trained police in Kosovo and Mexico. Two months after her death, he ' +
            'went to Honduras to lead a national police team on homicide investigations. Since 2017, he has been an ' +
            'international police advisor in Honduras.',
            location: {
                //NEED TO DO
                //Chicago OR world map with pin points on chicago, honduras, kosovo, mexico, afghanistan
                center: [-87.79255, 41.84618],
                zoom: 9.89,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'intro-coordinates',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'secondLast',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'In an interview for this piece, Khury Petersen-Smith, the Middle East Fellow at ' +
            'the Institute for Policy Studies, explained that these practices of torture in Chicago and the ' +
            'Global War on Terror track with American histories of violence. He argues these specific ' +
            'geographies are sites of knowledge and testing ground for new methods of control, and that these ' +
            'police and military actors are treated as “scholars of violence.” He calls the relationships between ' +
            'police departments and military history not linear or a direct chronology, but “circuits of violence ' +
            'between the U.S. domestic regime and the extent of the U.S. empire.”',
            location: {
                center: [-2.72423, 23.41095],
                zoom: 2,
                pitch: 00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'intro-coordinates',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'last',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '“I think there’s this idea that something special happened to Jon Burge in ' +
            'Vietnam, and that that explains why he would do something so monstrous. And obviously lots ' +
            'of things happen to people who are in combat and it is a wildly traumatic experience. Look at the ' +
            'world Jon Burge grew up in. Look at the world Richard Zuley grew up in. You grow up in the United ' +
            'States and you are primed to then go and commit and develop and hone forms of violence elsewhere and ' +
            'bring it back here. It’s the most ordinary thing in the world for the U.S. to support and incubate ' +
            'violence, and then not just import it, but be in a relationship to it.”',
            location: {
                center: [-2.72423, 23.41095],
                zoom: 2,
                pitch: 00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: []
        },
        
    ]
};
