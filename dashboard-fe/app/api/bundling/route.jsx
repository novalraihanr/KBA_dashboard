export async function GET(request) {
    const bundlingData = {
        2003: [
            { month: 'Januari', bundling1: ["Product 1", "Product 2"], bundling2: ["Product 3", "Product 4"], bundling3: ["Product 5", "Product 6"] },
            { month: 'Februari', bundling1: ["Product 7", "Product 8"], bundling2: ["Product 9", "Product 10"], bundling3: ["Product 11", "Product 12"] },
            { month: 'Maret', bundling1: ["Product 13", "Product 14"], bundling2: ["Product 15", "Product 16"], bundling3: ["Product 17", "Product 18"] },
            { month: 'April', bundling1: ["Product 19", "Product 20"], bundling2: ["Product 21", "Product 22"], bundling3: ["Product 23", "Product 24"] },
            { month: 'Mei', bundling1: ["Product 25", "Product 26"], bundling2: ["Product 27", "Product 28"], bundling3: ["Product 29", "Product 30"] },
            { month: 'Juni', bundling1: ["Product 31", "Product 32"], bundling2: ["Product 33", "Product 34"], bundling3: ["Product 35", "Product 36"] },
            { month: 'Juli', bundling1: ["Product 37", "Product 38"], bundling2: ["Product 39", "Product 40"], bundling3: ["Product 41", "Product 42"] },
            { month: 'Agustus', bundling1: ["Product 43", "Product 44"], bundling2: ["Product 45", "Product 46"], bundling3: ["Product 47", "Product 48"] },
            { month: 'September', bundling1: ["Product 49", "Product 50"], bundling2: ["Product 51", "Product 52"], bundling3: ["Product 53", "Product 54"] },
            { month: 'Oktober', bundling1: ["Product 55", "Product 56"], bundling2: ["Product 57", "Product 58"], bundling3: ["Product 59", "Product 60"] },
            { month: 'November', bundling1: ["Product 61", "Product 62"], bundling2: ["Product 63", "Product 64"], bundling3: ["Product 65", "Product 66"] },
            { month: 'Desember', bundling1: ["Product 67", "Product 68"], bundling2: ["Product 69", "Product 70"], bundling3: ["Product 71", "Product 72"] }
        ],
        2004: [
            { month: 'Januari', bundling1: ["Product 73", "Product 74"], bundling2: ["Product 75", "Product 76"], bundling3: ["Product 77", "Product 78"] },
            { month: 'Februari', bundling1: ["Product 79", "Product 80"], bundling2: ["Product 81", "Product 82"], bundling3: ["Product 83", "Product 84"] },
            { month: 'Maret', bundling1: ["Product 85", "Product 86"], bundling2: ["Product 87", "Product 88"], bundling3: ["Product 89", "Product 90"] },
            { month: 'April', bundling1: ["Product 91", "Product 92"], bundling2: ["Product 93", "Product 94"], bundling3: ["Product 95", "Product 96"] },
            { month: 'Mei', bundling1: ["Product 97", "Product 98"], bundling2: ["Product 99", "Product 100"], bundling3: ["Product 101", "Product 102"] },
            { month: 'Juni', bundling1: ["Product 103", "Product 104"], bundling2: ["Product 105", "Product 106"], bundling3: ["Product 107", "Product 108"] },
            { month: 'Juli', bundling1: ["Product 109", "Product 110"], bundling2: ["Product 111", "Product 112"], bundling3: ["Product 113", "Product 114"] },
            { month: 'Agustus', bundling1: ["Product 115", "Product 116"], bundling2: ["Product 117", "Product 118"], bundling3: ["Product 119", "Product 120"] },
            { month: 'September', bundling1: ["Product 121", "Product 122"], bundling2: ["Product 123", "Product 124"], bundling3: ["Product 125", "Product 126"] },
            { month: 'Oktober', bundling1: ["Product 127", "Product 128"], bundling2: ["Product 129", "Product 130"], bundling3: ["Product 131", "Product 132"] },
            { month: 'November', bundling1: ["Product 133", "Product 134"], bundling2: ["Product 135", "Product 136"], bundling3: ["Product 137", "Product 138"] },
            { month: 'Desember', bundling1: ["Product 139", "Product 140"], bundling2: ["Product 141", "Product 142"], bundling3: ["Product 143", "Product 144"] }
        ],
        2005: [
            { month: 'Januari', bundling1: ["Product 145", "Product 146"], bundling2: ["Product 147", "Product 148"], bundling3: ["Product 149", "Product 150"] },
            { month: 'Februari', bundling1: ["Product 151", "Product 152"], bundling2: ["Product 153", "Product 154"], bundling3: ["Product 155", "Product 156"] },
            { month: 'Maret', bundling1: ["Product 157", "Product 158"], bundling2: ["Product 159", "Product 160"], bundling3: ["Product 161", "Product 162"] },
            { month: 'April', bundling1: ["Product 163", "Product 164"], bundling2: ["Product 165", "Product 166"], bundling3: ["Product 167", "Product 168"] },
            { month: 'Mei', bundling1: ["Product 169", "Product 170"], bundling2: ["Product 171", "Product 172"], bundling3: ["Product 173", "Product 174"] },
            { month: 'Juni', bundling1: ["Product 175", "Product 176"], bundling2: ["Product 177", "Product 178"], bundling3: ["Product 179", "Product 180"] },
            { month: 'Juli', bundling1: ["Product 181", "Product 182"], bundling2: ["Product 183", "Product 184"], bundling3: ["Product 185", "Product 186"] },
            { month: 'Agustus', bundling1: ["Product 187", "Product 188"], bundling2: ["Product 189", "Product 190"], bundling3: ["Product 191", "Product 192"] },
            { month: 'September', bundling1: ["Product 193", "Product 194"], bundling2: ["Product 195", "Product 196"], bundling3: ["Product 197", "Product 198"] },
            { month: 'Oktober', bundling1: ["Product 199", "Product 200"], bundling2: ["Product 201", "Product 202"], bundling3: ["Product 203", "Product 204"] },
            { month: 'November', bundling1: ["Product 205", "Product 206"], bundling2: ["Product 207", "Product 208"], bundling3: ["Product 209", "Product 210"] },
            { month: 'Desember', bundling1: ["Product 211", "Product 212"], bundling2: ["Product 213", "Product 214"], bundling3: ["Product 215", "Product 216"] }
        ]
    };

    return new Response(JSON.stringify(bundlingData), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}
