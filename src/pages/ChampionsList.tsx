import axios from "axios";
import React, { ChangeEvent } from "react";
import styled from "styled-components";
import classnames from "classnames";
import Champion from "../components/Champion";
import ChampionModel from "../models/ChampionModel";
import tierStay from "../assets/icon-championtier-stay.png"
import champion32 from "../assets/champion32.png";
import championTier from "../assets/icon-champion-p.png";
import championTier1 from "../assets/icon-champtier-1.png";
import ChampionTrendItem from "../components/ChampionTrendItem";
import ChampionTrendHeader, { ChampionTrendItemCss } from "../components/ChampionTrendHeader";
import ChampionTrendToolbar from "../components/ChampionTrendToolbar";
import ChampionTrendModel from "../models/ChampionTrendModel";

interface ChampionListProps {

}

interface ChampionListState {
    allChampions: ChampionModel[];
    champions: ChampionModel[];
    type: string;
    search: string;

    trendChampions: ChampionTrendModel[];
}

const ChampionListPageWrapper = styled.div`
    display: flex;
    width: 1080px;
    margin: 0 auto;
    margin-top: 100px;
`

// List of champion page
export default class ChampionsList extends React.Component<ChampionListProps, ChampionListState> {
    constructor(props: ChampionListProps) {
        super(props);

        this.state = {
            allChampions: [],
            champions: [],
            type: "ALL",
            search: "",

            trendChampions: [],
        }
    }

    async componentDidMount() {
        const response = await axios.get("http://opgg.dudco.kr/champion");
        const allChampions = response.data.map((data: any) => 
            new ChampionModel({
                id: data.id,
                name: data.name,
                key: data.key,
                position: data.position
            })
        );

        const responseTrend =  await axios.get("http://opgg.dudco.kr/champion/trend/tier/top")
        const trendChampions = responseTrend.data.map((data: any) => 
            new ChampionTrendModel({
                id: data.id,
                rank: data.rank,
                change: data.change,
                name: data.name,
                position: data.position,
                winRate: data.winRate,
                pickRate: data.pickRate,
                banRate: data.banRate,
                tierIcon: data.tierIcon,
            })
        );

        this.setState({
            allChampions,
            champions: allChampions,
            trendChampions,
        });
    }

    onChangeType = (type: string) => () => {
        this.setState({
            type,
            champions: this.filterChampions(type),
            search: "",
        });
    }
    
    filterChampions = (type: string) => {
        switch (type) {
            case "TOP":
                return this.state.allChampions.filter(c => c.position!!.indexOf("탑") > -1);        
            case "JUG":
                return this.state.allChampions.filter(c => c.position!!.indexOf("정글") > -1);        
            case "MID":
                return this.state.allChampions.filter(c => c.position!!.indexOf("미드") > -1);        
            case "ADC":
                return this.state.allChampions.filter(c => c.position!!.indexOf("바텀") > -1);        
            case "SUP":
                return this.state.allChampions.filter(c => c.position!!.indexOf("서포터") > -1);        
            default:
                return this.state.allChampions;
        }
    }

    onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if(value != "") {
            const searchChamp = this.filterChampions(this.state.type).filter(champ => champ.name?.includes(value) );
            this.setState({champions: searchChamp, search: value});
        } else {
            const champions = this.filterChampions(this.state.type);
            this.setState({champions, search: value})
        }
    }

    render() {
        return (
            <ChampionListPageWrapper>
                <ChampionsWrapper>
                    <div className="header">
                        <div className="item-wrap">
                            <div className={classnames("item", {select: this.state.type === "ALL"})} onClick={this.onChangeType("ALL")}>전체</div>
                            <div className={classnames("item", {select: this.state.type === "TOP"})} onClick={this.onChangeType("TOP")}>탑</div>
                            <div className={classnames("item", {select: this.state.type === "JUG"})} onClick={this.onChangeType("JUG")}>정글</div>
                            <div className={classnames("item", {select: this.state.type === "MID"})} onClick={this.onChangeType("MID")}>미드</div>
                            <div className={classnames("item", {select: this.state.type === "ADC"})} onClick={this.onChangeType("ADC")}>바텀</div>
                            <div className={classnames("item", {select: this.state.type === "SUP"})} onClick={this.onChangeType("SUP")}>서포터</div>
                        </div>
                        <input type="text" placeholder="챔피언 검색 (가렌, ㄱㄹ, ...)" onChange={this.onChangeSearch} value={this.state.search}/>
                    </div>
                    <div className="list">
                        {
                            this.state.champions.map((data) => 
                                <Champion 
                                    key={data.id}
                                    id={Number(data.id) || 0}
                                    position={data.position || []}
                                    name = {data.name || ""}
                                />
                            )
                        }
                        {[1, 2, 3, 4, 5, 6].map(() => <div style={{width: "82px", height: 0}}/>)}
                    </div>
                </ChampionsWrapper>
                <ChampionTrendWrapper>
                    <div className="header">
                        <div>챔피언 순위</div>
                        <div className="item-wrap">
                            <div className="item select">
                                <img src={championTier}/>
                                티어
                            </div>
                            <div className="item">승률</div>
                            <div className="item">픽률</div>
                            <div className="item">밴률</div>
                        </div>
                    </div>
                    <div className="list">
                        <ChampionTrendToolbar>
                            <div hidden={true}>전체</div>
                            <div className="select">탑</div>
                            <div>정글</div>
                            <div>미드</div>
                            <div>바텀</div>
                            <div>서포터</div>
                        </ChampionTrendToolbar>
                        <ChampionTrendHeader>
                            <div>#</div>
                            <div>챔피언</div>
                            <div>승률</div>
                            <div>픽률</div>
                            <div>티어</div>
                        </ChampionTrendHeader>
                        
                        {
                            this.state.trendChampions.map(c => 
                                <ChampionTrendItem 
                                    championID={c.id}
                                    change={c.change}
                                    name={c.name}
                                    position={c.position}
                                    win={c.winRate}
                                    pick={c.pickRate}
                                    tier={c.tierIcon}
                                    rank={c.rank}
                                />
                            )
                        }
                    </div>
                </ChampionTrendWrapper>
            </ChampionListPageWrapper>
        )
    }
}

const ChampionsWrapper = styled.div`
    background-color: white;
    border-right: 1px solid #e9eff4;
    & > .header {
        display: flex;
        justify-content: space-between;
        padding: 0 17px;
        border-bottom: 1px solid #e9eff4;

        &  > .item-wrap {
            display: flex;
        }

        & > .item-wrap > .item {
            line-height: 60px;
            padding: 0 12px;
            color: rgba(0, 0,0, .6);
            cursor: pointer;

            &.select {
                box-shadow: 0px -3px 0px 0px #5383e8 inset;
                color: #5383e8;
                font-weight: bold;
            }
        }

        & > input {
            width: 200px;
            margin: 10px 0;
            padding: 0 10px;
            border: none;
            background-color: #f7f7f7;
        }
    }

    & > .list {
        width: 564px;
        background-color: #f7f7f7;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 30px;
    }
`

const ChampionTrendWrapper = styled.div`
    flex: 1;
    background-color: white;

    & > div.header {
        justify-content: space-between;
        align-items: center;
        display: flex;
        border-bottom: 1px solid #e9eff4;

        font-weight: bold;
        font-size: 14px;
        padding: 0 20px;

        & > .item-wrap {
            display: flex;
            color: rgba(0,0,0,.6);

            & > .item {
                display: flex;
                align-items: center;
                position: relative;
                line-height: 60px;
                margin: 0 10px;
                padding: 0 5px;
                cursor: pointer;
            }

            & > .item > img {
                height: 17px;
                margin-right: 5px;
            }

            & > .item:not(:last-child)::after {
                content: "";
                width: 1px;
                height: 20px;
                background-color: #eee;
                position: absolute;
                right: -10px;
                top: 50%;
                margin-top: -10px;
            }

            & > .item.select {
                color: #5383e8;
                box-shadow: 0px -3px 0px 0px #5383e8 inset;
            }
        }
    }

    & > div.list {
        height: 100vh;
        background-color: #f7f7f7;
        padding: 20px;
    }
`