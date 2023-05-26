<template>
    <div id="index-wrapper"></div>
</template>

<script setup lang="ts">
import { onMounted, Ref } from 'vue'
import { EChartsOption, init } from 'echarts'
import { getDepartList } from '@/api/depart'

//获取院系数据
const departList: Ref<any> = ref([])
const colors = ['#3E4A70', '#2E3E70', '#526294', '#333366', '#4B5470']
const bgColor = '#FFFFFF'
const itemStyle = {
    star5: {
        color: colors[0]
    },
    star4: {
        color: colors[1]
    },
    star3: {
        color: colors[2]
    },
    star2: {
        color: colors[3]
    }
}
let data: any = [
    {
        name: '虚构',
        itemStyle: {
            color: colors[1]
        },
        children: [
            {
                name: '小说',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '疼'
                            },
                            {
                                name: '慈悲'
                            },
                            {
                                name: '楼下的房客'
                            }
                        ]
                    },
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '虚无的十字架'
                            },
                            {
                                name: '无声告白'
                            },
                            {
                                name: '童年的终结'
                            }
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '疯癫老人日记'
                            }
                        ]
                    }
                ]
            },
            {
                name: '其他',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '纳博科夫短篇小说全集'
                            }
                        ]
                    },
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '安魂曲'
                            },
                            {
                                name: '人生拼图版'
                            }
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '比起爱你，我更需要你'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: '非虚构',
        itemStyle: {
            color: colors[2]
        },
        children: [
            {
                name: '设计',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '无界面交互'
                            }
                        ]
                    },
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '数字绘图的光照与渲染技术'
                            },
                            {
                                name: '日本建筑解剖书'
                            }
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '奇幻世界艺术\n&RPG地图绘制讲座'
                            }
                        ]
                    }
                ]
            },
            {
                name: '社科',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '痛点'
                            }
                        ]
                    },
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '卓有成效的管理者'
                            },
                            {
                                name: '进化'
                            },
                            {
                                name: '后物欲时代的来临'
                            }
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '疯癫与文明'
                            }
                        ]
                    }
                ]
            },
            {
                name: '心理',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '我们时代的神经症人格'
                            }
                        ]
                    },
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '皮格马利翁效应'
                            },
                            {
                                name: '受伤的人'
                            }
                        ]
                    },
                    {
                        name: '3☆'
                    },
                    {
                        name: '2☆',
                        children: [
                            {
                                name: '迷恋'
                            }
                        ]
                    }
                ]
            },
            {
                name: '居家',
                children: [
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '把房子住成家'
                            },
                            {
                                name: '只过必要生活'
                            },
                            {
                                name: '北欧简约风格'
                            }
                        ]
                    }
                ]
            },
            {
                name: '绘本',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '设计诗'
                            }
                        ]
                    },
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '假如生活糊弄了你'
                            },
                            {
                                name: '博物学家的神秘动物图鉴'
                            }
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '方向'
                            }
                        ]
                    }
                ]
            },
            {
                name: '哲学',
                children: [
                    {
                        name: '4☆',
                        children: [
                            {
                                name: '人生的智慧'
                            }
                        ]
                    }
                ]
            },
            {
                name: '技术',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '代码整洁之道'
                            }
                        ]
                    },
                    {
                        name: '4☆',
                        children: [
                            {
                                name: 'Three.js 开发指南'
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
const getDepart = async () => {
    const res: any = await getDepartList({ pageNum: 1, pageSize: 100 })
    return res.data.records.map((item: any, index: number) => {
        return {
            name: item.departName,
            itemStyle: {
                color: colors[index]
            },
            children: item.majorList.map((majorItem: any, majorIndex: number) => {
                return {
                    name: majorItem.majorName,
                    children: majorItem.classList.map((classItem: any, classIndex: number) => {
                        return {
                            name: classItem.className
                        }
                    })
                }
            })
        }
    })
}
onMounted(async () => {
    data = await getDepart()
    for (let j = 0; j < data.length; ++j) {
        let level1: any = data[j].children
        for (let i = 0; i < level1.length; ++i) {
            let block: any = level1[i].children
            let bookScore: any = []
            let bookScoreId: any
            for (let star = 0; star < block.length; ++star) {
                let style: any = (function (name) {
                    // switch (name) {
                    //     case '5☆':
                    //         bookScoreId = 0
                    //         return itemStyle.star5
                    //     case '4☆':
                    //         bookScoreId = 1
                    //         return itemStyle.star4
                    //     case '3☆':
                    //         bookScoreId = 2
                    //         return itemStyle.star3
                    //     case '2☆':
                    //         bookScoreId = 3
                    //         return itemStyle.star2
                    // }
                    bookScoreId = 3
                    return itemStyle.star2
                })(block[star].name)
                block[star].label = {
                    color: style.color,
                    downplay: {
                        opacity: 0.5
                    }
                }
                // if (block[star].children) {
                style = {
                    opacity: 1,
                    color: style.color
                }
                block.forEach(function (book: any) {
                    book.value = 1
                    book.itemStyle = style
                    book.label = {
                        // color: style.color
                        color: '#fff'
                    }
                    let value = 1
                    if (bookScoreId === 0 || bookScoreId === 3) {
                        value = 5
                    }
                    if (bookScore[bookScoreId]) {
                        bookScore[bookScoreId].value += value
                    } else {
                        bookScore[bookScoreId] = {
                            color: colors[bookScoreId],
                            value: value
                        }
                    }
                })
                // }
            }
            level1[i].itemStyle = {
                color: data[j].itemStyle.color
            }
        }
    }
    //获取dom，断言HTMLElement类型
    const chartEle: HTMLElement = document.getElementById('index-wrapper') as HTMLElement
    //初始化echarts实例
    const chart = init(chartEle)
    //配置项
    const option: EChartsOption = {
        backgroundColor: bgColor,
        color: colors,
        series: [
            {
                type: 'sunburst',
                center: ['50%', '48%'],
                data: data,
                sort: function (a, b) {
                    if (a.depth === 1) {
                        return b.getValue() - a.getValue()
                    } else {
                        return a.dataIndex - b.dataIndex
                    }
                },
                label: {
                    rotate: 'radial',
                    color: bgColor
                },
                itemStyle: {
                    borderColor: bgColor,
                    borderWidth: 2
                },
                levels: [
                    {},
                    {
                        r0: 0,
                        r: 150,
                        label: {
                            rotate: 0
                        }
                    },
                    {
                        r0: 150,
                        r: 250
                    },
                    {
                        r0: 250,
                        r: 300,
                        itemStyle: {
                            shadowBlur: 2,
                            shadowColor: colors[2],
                            color: 'transparent'
                        },
                        label: {
                            rotate: 'tangential',
                            fontSize: 10,
                            color: colors[0]
                        }
                    },
                    {
                        r0: 400,
                        r: 500,
                        itemStyle: {
                            shadowBlur: 80,
                            shadowColor: colors[0]
                        },
                        label: {
                            position: 'outside',
                            textShadowBlur: 5,
                            textShadowColor: '#333'
                        },
                        downplay: {
                            label: {
                                opacity: 0.5
                            }
                        }
                    }
                ]
            }
        ]
    }
    nextTick(() => {
        option && chart.setOption(option)
    })
    //渲染图表
})
</script>

<style lang="scss" scoped></style>
