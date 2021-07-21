import React from "react";
import styled from "styled-components";
import championImage from "../assets/champions.png";

const ChampionWrapper = styled.div<{chmpionId: number}>`
    margin-top: 16px;

    & > div:first-child {
        position: relative;
        width: 82px;
        height: 82px;
        border: 1px solid rgba(0, 0, 0, .7);

        & > div.image {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            background-image: url(${championImage});
            background-position: 0 -${(props) => props.chmpionId * 82}px;
        }

        & > div.position {
            position: absolute;
            right: 0;
            bottom: 0;
            text-align: right;

            & > span {
                background-color: rgba(0, 0, 0, .7);
                margin-bottom: 5px;
                font-size: 12px;
                color: white;
                padding: 1px;
            }
        }
    }

    & > div.name {
        margin-top: 8px;
        font-size: 12px;
        width: 82px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

interface ChampionProps {
    id: number;
    name: string;
    position: string[];
}

const Champion: React.FC<ChampionProps> = (props) => {
    return (
        <ChampionWrapper chmpionId={props.id}>
            <div>
                <div className="image"></div>
                <div className="position">
                    {props.position.map(p => {
                        return (
                            <>
                                <span>{p}</span>
                                <br/>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className="name">{props.name}</div>
        </ChampionWrapper>
    )
}

export default Champion;