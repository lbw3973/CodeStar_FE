import React from 'react';
import * as S from '@/styles/commentStyled';
import Link from 'next/link';
import { CommentList } from '@/types/RequestInterface';
import { getDate } from '@/utils/dateFormat';
import UserDummyImage from '@/asset/img/UserDummyImage';

function Index({ comment }: { comment: CommentList }) {
  return (
    <S.CommentContainer>
      <S.WriterContainer>
        <div className="profile">
          <Link
            href={{ pathname: `/profile`, query: { usedId: comment?.author.userId } }}
            as={'@' + comment?.author.userId}
          >
            {comment.author.profileImg !== '' ? <img src={comment.author.profileImg} /> : <UserDummyImage />}
          </Link>
          <div className="comment-info">
            <div className="username">
              <Link
                href={{ pathname: `/profile`, query: { usedId: comment?.author.userId } }}
                as={'@' + comment?.author.userId}
              >
                {comment.author.userName}
              </Link>
            </div>
            <div className="date">{getDate(comment.createdAt)}</div>
          </div>
        </div>
      </S.WriterContainer>
      <S.ContentContainer>
        <p>{comment.content}</p>
      </S.ContentContainer>
    </S.CommentContainer>
  );
}

export default Index;
