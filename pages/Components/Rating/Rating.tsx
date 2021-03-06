import React, {useEffect, useState, KeyboardEvent} from "react";
import {RatingProps} from "./Rating.props";
import styles from "./Rating.module.css";
import classnames from 'classnames';
import StarIcon from './star.svg';

const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArr = ratingArr.map((r: JSX.Element, i: number) => {
            return (
                // span для плавного перехода, нет обрывов при смене курсора
                <span className={classnames(styles.star, {
                    [styles.filled]: i < currentRating,
                    [styles.editable]: isEditable
                })}
                      onMouseEnter={() => changeDisplay(i + 1)}
                      onMouseLeave={() => changeDisplay(rating)}
                      onClick={() => onClick(i + 1)}>
					<StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
                    />
				</span>

            );
        });
        setRatingArr(updatedArr);
    };

    const changeDisplay = (i: number) => {
        if (!isEditable) return;
        constructRating(i);
    };

    const onClick = (i: number) => {
        if (!isEditable || !setRating) return;
        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code != 'Space' || !setRating) return;
        setRating(i);
    }

    return (
        <div {...props}>
            {ratingArr.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    );
};

export default Rating;