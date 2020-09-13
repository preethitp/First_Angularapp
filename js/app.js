var app = angular.module('MyApp', [])
        app.controller('MyController', function ($scope) {
            $scope.IsVisible = false;
            $scope.GenerateTable = function () {
                $scope.details = [
                {
                "active": 268,
                "active_rate": 7.61,
                "confirmed": 3521,
                "death_rate": 1.45,
                "deaths": 51,
                "recovered": 3202,
                "recovered_rate": 90.94,
                "state": "Andaman and Nicobar"
            },
            {
                "active": 95733,
                "active_rate": 17.17,
                "confirmed": 557587,
                "death_rate": 0.87,
                "deaths": 4846,
                "recovered": 457008,
                "recovered_rate": 81.96,
                "state": "Andhra Pradesh"
            },
            {
                "active": 1712,
                "active_rate": 28.65,
                "confirmed": 5975,
                "death_rate": 0.17,
                "deaths": 10,
                "recovered": 4253,
                "recovered_rate": 71.18,
                "state": "Arunachal Pradesh"
            },
            {
                "active": 29133,
                "active_rate": 20.74,
                "confirmed": 140471,
                "death_rate": 0.32,
                "deaths": 453,
                "recovered": 110885,
                "recovered_rate": 78.94,
                "state": "Assam"
            },
            {
                "active": 14396,
                "active_rate": 9.19,
                "confirmed": 156703,
                "death_rate": 0.52,
                "deaths": 808,
                "recovered": 141499,
                "recovered_rate": 90.3,
                "state": "Bihar"
            },
            {
                "active": 2586,
                "active_rate": 34.29,
                "confirmed": 7542,
                "death_rate": 1.22,
                "deaths": 92,
                "recovered": 4864,
                "recovered_rate": 64.49,
                "state": "Chandigarh"
            },
            {
                "active": 33246,
                "active_rate": 53.83,
                "confirmed": 61763,
                "death_rate": 0.87,
                "deaths": 539,
                "recovered": 27978,
                "recovered_rate": 45.3,
                "state": "Chhattisgarh"
            },
            {
                "active": 279,
                "active_rate": 10.24,
                "confirmed": 2725,
                "death_rate": 0.07,
                "deaths": 2,
                "recovered": 2444,
                "recovered_rate": 89.69,
                "state": "Dadra and Nagar Haveli and Daman and Diu"
            },
            {
                "active": 28059,
                "active_rate": 13.11,
                "confirmed": 214069,
                "death_rate": 2.2,
                "deaths": 4715,
                "recovered": 181295,
                "recovered_rate": 84.69,
                "state": "Delhi"
            },
            {
                "active": 5323,
                "active_rate": 22.01,
                "confirmed": 24185,
                "death_rate": 1.18,
                "deaths": 286,
                "recovered": 18576,
                "recovered_rate": 76.81,
                "state": "Goa"
            },
            {
                "active": 16301,
                "active_rate": 14.53,
                "confirmed": 112174,
                "death_rate": 2.85,
                "deaths": 3195,
                "recovered": 92678,
                "recovered_rate": 82.62,
                "state": "Gujarat"
            },
            {
                "active": 19446,
                "active_rate": 21.34,
                "confirmed": 91115,
                "death_rate": 1.05,
                "deaths": 956,
                "recovered": 70713,
                "recovered_rate": 77.61,
                "state": "Haryana"
            },
            {
                "active": 3194,
                "active_rate": 34.61,
                "confirmed": 9229,
                "death_rate": 0.79,
                "deaths": 73,
                "recovered": 5962,
                "recovered_rate": 64.6,
                "state": "Himachal Pradesh"
            },
            {
                "active": 16261,
                "active_rate": 31.03,
                "confirmed": 52410,
                "death_rate": 1.65,
                "deaths": 864,
                "recovered": 35285,
                "recovered_rate": 67.32,
                "state": "Jammu and Kashmir"
            },
            {
                "active": 14844,
                "active_rate": 24.55,
                "confirmed": 60460,
                "death_rate": 0.9,
                "deaths": 542,
                "recovered": 45074,
                "recovered_rate": 74.55,
                "state": "Jharkhand"
            },
            {
                "active": 97834,
                "active_rate": 21.76,
                "confirmed": 449551,
                "death_rate": 1.59,
                "deaths": 7161,
                "recovered": 344556,
                "recovered_rate": 76.64,
                "state": "Karnataka"
            },
            {
                "active": 28870,
                "active_rate": 27.46,
                "confirmed": 105139,
                "death_rate": 0.4,
                "deaths": 425,
                "recovered": 75844,
                "recovered_rate": 72.14,
                "state": "Kerala"
            },
            {
                "active": 841,
                "active_rate": 25.53,
                "confirmed": 3294,
                "death_rate": 1.18,
                "deaths": 39,
                "recovered": 2414,
                "recovered_rate": 73.28,
                "state": "Ladakh"
            },
            {
                "active": 0,
                "active_rate": 0,
                "confirmed": 0,
                "death_rate": 0,
                "deaths": 0,
                "recovered": 0,
                "recovered_rate": 0,
                "state": "Lakshadweep"
            },
            {
                "active": 280138,
                "active_rate": 26.99,
                "confirmed": 1037765,
                "death_rate": 2.81,
                "deaths": 29115,
                "recovered": 728512,
                "recovered_rate": 70.2,
                "state": "Maharashtra"
            },
            {
                "active": 1584,
                "active_rate": 20.49,
                "confirmed": 7731,
                "death_rate": 0.58,
                "deaths": 45,
                "recovered": 6102,
                "recovered_rate": 78.93,
                "state": "Manipur"
            },
            {
                "active": 1570,
                "active_rate": 43.43,
                "confirmed": 3615,
                "death_rate": 0.69,
                "deaths": 25,
                "recovered": 2020,
                "recovered_rate": 55.88,
                "state": "Meghalaya"
            },
            {
                "active": 591,
                "active_rate": 41.8,
                "confirmed": 1414,
                "death_rate": 0.0,
                "deaths": 0,
                "recovered": 823,
                "recovered_rate": 58.2,
                "state": "Mizoram"
            },
            {
                "active": 19840,
                "active_rate": 23.08,
                "confirmed": 85966,
                "death_rate": 2.01,
                "deaths": 1728,
                "recovered": 64398,
                "recovered_rate": 74.91,
                "state": "Madhya Pradesh"
            },
            {
                "active": 1215,
                "active_rate": 23.99,
                "confirmed": 5064,
                "death_rate": 0.2,
                "deaths": 10,
                "recovered": 3839,
                "recovered_rate": 75.81,
                "state": "Nagaland"
            },
            {
                "active": 30999,
                "active_rate": 21.1,
                "confirmed": 146894,
                "death_rate": 0.42,
                "deaths": 616,
                "recovered": 115279,
                "recovered_rate": 78.48,
                "state": "Odisha"
            },
            {
                "active": 4847,
                "active_rate": 24.93,
                "confirmed": 19445,
                "death_rate": 1.9,
                "deaths": 370,
                "recovered": 14228,
                "recovered_rate": 73.17,
                "state": "Puducherry"
            },
            {
                "active": 19384,
                "active_rate": 25.16,
                "confirmed": 77057,
                "death_rate": 2.97,
                "deaths": 2288,
                "recovered": 55385,
                "recovered_rate": 71.88,
                "state": "Punjab"
            },
            {
                "active": 16582,
                "active_rate": 16.47,
                "confirmed": 100705,
                "death_rate": 1.21,
                "deaths": 1221,
                "recovered": 82902,
                "recovered_rate": 82.32,
                "state": "Rajasthan"
            },
            {
                "active": 541,
                "active_rate": 26.33,
                "confirmed": 2055,
                "death_rate": 0.54,
                "deaths": 11,
                "recovered": 1503,
                "recovered_rate": 73.14,
                "state": "Sikkim"
            },
            {
                "active": 47110,
                "active_rate": 9.48,
                "confirmed": 497066,
                "death_rate": 1.67,
                "deaths": 8307,
                "recovered": 441649,
                "recovered_rate": 88.85,
                "state": "Tamil Nadu"
            },
            {
                "active": 31607,
                "active_rate": 20.12,
                "confirmed": 157096,
                "death_rate": 0.61,
                "deaths": 961,
                "recovered": 124528,
                "recovered_rate": 79.27,
                "state": "Telengana"
            },
            {
                "active": 7584,
                "active_rate": 40.11,
                "confirmed": 18910,
                "death_rate": 1.03,
                "deaths": 194,
                "recovered": 11132,
                "recovered_rate": 58.87,
                "state": "Tripura"
            },
            {
                "active": 67955,
                "active_rate": 22.22,
                "confirmed": 305831,
                "death_rate": 1.42,
                "deaths": 4349,
                "recovered": 233527,
                "recovered_rate": 76.36,
                "state": "Uttar Pradesh"
            },
            {
                "active": 9781,
                "active_rate": 32.24,
                "confirmed": 30336,
                "death_rate": 1.33,
                "deaths": 402,
                "recovered": 20153,
                "recovered_rate": 66.43,
                "state": "Uttarakhand"
            },
            {
                "active": 23521,
                "active_rate": 11.79,
                "confirmed": 199493,
                "death_rate": 1.95,
                "deaths": 3887,
                "recovered": 172085,
                "recovered_rate": 86.26,
                "state": "West Bengal"
            }
               ];
                $scope.IsVisible = true;
                  $scope.orderByMe = function(x) {
                  $scope.myOrderBy = x;}
            };
        });