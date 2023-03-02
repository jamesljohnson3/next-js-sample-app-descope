import convert from 'xml-js';
import { Abanquerio } from './Abanqueiro';
import { White } from './White';

export const sampleData = {
    type: 'element',
    name: 'savegame',
    elements: [
        {
            type: 'element',
            name: 'meta',
            elements: [
                {
                    type: 'element',
                    name: 'gameVersion',
                    elements: [
                        {
                            type: 'text',
                            text: '1.3.3287 rev1159',
                        },
                    ],
                },
                {
                    type: 'element',
                    name: 'modIds',
                    elements: [
                        { type: 'element',
                            name: 'li',
                            elements: [
                                {
                                    type: 'text',
                                    text: 'ludeon.rimworld',
                                },
                            ],
                        },
                        {
                            type: 'element',
                            name: 'li',
                            elements: [
                                {
                                    type: 'text',
                                    text: 'ludeon.rimworld.royalty',
                                },
                            ],
                        },
                        {
                            type: 'element',
                            name: 'li',
                            elements: [
                                {
                                    type: 'text',
                                    text: 'ludeon.rimworld.ideology',
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'element',
                    name: 'modSteamIds',
                    elements: [
                        {
                            type: 'element',
                            name: 'li',
                            elements: [
                                {
                                    type: 'text',
                                    text: '0',
                                },
                            ],
                        },
                        {
                            type: 'element',
                            name: 'li',
                            elements: [
                                {
                                    type: 'text',
                                    text: '1149640',
                                },
                            ],
                        },
                        {
                            type: 'element',
                            name: 'li',
                            elements: [
                                {
                                    type: 'text',
                                    text: '1392840',
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'element',
                    name: 'modNames',
                    elements: [
                        {
                            type: 'element',
                            name: 'li',
                            elements: [
                                {
                                    type: 'text',
                                    text: 'Core',
                                },
                            ],
                        },
                        {
                            type: 'element',
                            name: 'li',
                            elements: [
                                {
                                    type: 'text',
                                    text: 'Royalty',
                                },
                            ],
                        },
                        {
                            type: 'element',
                            name: 'li',
                            elements: [
                                {
                                    type: 'text',
                                    text: 'Ideology',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: 'element',
            name: 'game',
            elements: [
                {
                    type: 'element',
                    name: 'currentMapIndex',
                    elements: [
                        {
                            type: 'text',
                            text: '0',
                        },
                    ],
                },
                {
                    type: 'element',
                    name: 'info',
                    elements: [
                        {
                            type: 'element',
                            name: 'realPlayTimeInteracting',
                            elements: [
                                {
                                    type: 'text',
                                    text: '73860.94',
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'element',
                    name: 'maps',
                    elements: [
                        {
                            type: 'element',
                            name: 'li',
                            elements: [
                                {
                                    type: 'element',
                                    name: 'uniqueID',
                                    elements: [
                                        {
                                            type: 'text',
                                            text: '0',
                                        },
                                    ],
                                },
                                {
                                    type: 'element',
                                    name: 'mapInfo',
                                    elements: [
                                        {
                                            type: 'element',
                                            name: 'size',
                                            elements: [
                                                {
                                                    type: 'text',
                                                    text: '(250, 1, 250)',
                                                },
                                            ],
                                        },
                                        {
                                            type: 'element',
                                            name: 'parent',
                                            elements: [
                                                {
                                                    type: 'text',
                                                    text: 'WorldObject_467',
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: 'element',
                                    name: 'components',
                                    elements: [
                                        {
                                            type: 'element',
                                            name: 'li',
                                            attributes: {
                                                Class: 'RoadInfo',
                                            },
                                            elements: [
                                                {
                                                    type: 'element',
                                                    name: 'roadEdgeTiles',
                                                    elements: [],
                                                },
                                            ],
                                        },
                                        {
                                            type: 'element',
                                            name: 'li',
                                            attributes: {
                                                Class: 'WaterInfo',
                                            },
                                            elements: [],
                                        },
                                        {
                                            type: 'element',
                                            name: 'li',
                                            attributes: {
                                                Class: 'BreakdownManager',
                                            },
                                            elements: [],
                                        },
                                    ],
                                },
                                {
                                    type: 'element',
                                    name: 'things',
                                    elements: [
                                        White,
                                        Abanquerio,
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
} as convert.Element;
