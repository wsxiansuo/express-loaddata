
-- Table: sxs_poem_types
CREATE TABLE sxs_poem_types ( 
    id   INTEGER PRIMARY KEY ASC AUTOINCREMENT
                 UNIQUE,
    pid  INTEGER NOT NULL
                 DEFAULT ( 0 ),
    name VARCHAR,
    count INTEGER 
);

INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (1, 0, '先秦');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (2, 0, '两汉');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (3, 0, '魏晋');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (4, 0, '南北朝');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (5, 0, '隋代');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (6, 0, '唐代');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (7, 0, '五代');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (8, 0, '宋代');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (9, 0, '元代');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (10, 0, '明代');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (11, 0, '清代');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (12, 999, '唐诗三百首');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (13, 999, '古诗三百首');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (14, 999, '宋词三百首');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (15, 999, '宋词精选');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (16, 999, '古诗十九首');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (17, 999, '诗经');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (18, 999, '楚辞');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (19, 999, '乐府');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (20, 999, '小学');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (21, 999, '初中');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (22, 999, '高中');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (23, 999, '全唐诗');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (24, 999, '全宋词');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (25, 999, '写景');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (26, 999, '咏物');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (27, 999, '春天');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (28, 999, '夏天');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (29, 999, '秋天');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (30, 999, '冬天');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (31, 999, '写雨');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (32, 999, '写雪');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (33, 999, '写风');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (34, 999, '写花');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (35, 999, '梅花');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (36, 999, '荷花');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (37, 999, '菊花');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (38, 999, '柳树');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (39, 999, '月亮');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (40, 999, '山水');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (41, 999, '写山');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (42, 999, '写水');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (43, 999, '长江');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (44, 999, '黄河');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (45, 999, '儿童');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (46, 999, '写鸟');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (47, 999, '写马');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (48, 999, '田园');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (49, 999, '边塞');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (50, 999, '地名');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (51, 999, '节日');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (52, 999, '春节');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (53, 999, '元宵');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (54, 999, '寒食');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (55, 999, '清明');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (56, 999, '端午');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (57, 999, '七夕');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (58, 999, '中秋');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (59, 999, '重阳');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (60, 999, '怀古');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (61, 999, '抒情');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (62, 999, '爱国');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (63, 999, '离别');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (64, 999, '送别');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (65, 999, '思乡');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (66, 999, '思念');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (67, 999, '爱情');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (68, 999, '励志');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (69, 999, '哲理');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (70, 999, '闺怨');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (71, 999, '悼亡');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (72, 999, '写人');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (73, 999, '老师');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (74, 999, '母亲');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (75, 999, '友情');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (76, 999, '战争');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (77, 999, '读书');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (78, 999, '惜时');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (79, 999, '忧民');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (80, 999, '婉约');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (81, 999, '全元曲');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (82, 999, '豪放');
INSERT INTO [sxs_poem_types] ([id], [pid], [name]) VALUES (83, 999, '民谣');
