import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const css = await readFile(new URL("../src/styles.css", import.meta.url), "utf8");
const projects = await readFile(new URL("../src/projects.js", import.meta.url), "utf8");

test("首页包含自我介绍、分类、精选项目和联系方式", () => {
  assert.match(html, /id="about"/);
  assert.match(html, /id="categories"/);
  assert.match(html, /id="projects"/);
  assert.match(html, /id="contact"/);
});

test("首页列出六个真实项目且不使用生成图片", () => {
  assert.match(projects, /SportLoop/);
  assert.match(projects, /Versa 多功能空气炸锅/);
  assert.match(projects, /一袭戏服，一种人生/);
  assert.match(projects, /从凝视到亲吻/);
  assert.match(projects, /机械轨道与爬楼机器人/);
  assert.match(projects, /生长中的记忆/);
  assert.doesNotMatch(html + projects, /generated_images|unsplash|placeholder/i);
});

test("视觉系统使用灰白黑、暗红、金色和蓝色语义变量", () => {
  assert.match(css, /--paper:/);
  assert.match(css, /--red:/);
  assert.match(css, /--ink:/);
  assert.match(css, /--gold:/);
  assert.match(css, /--blue:/);
  assert.match(css, /prefers-reduced-motion/);
});

test("页面具备基础可访问性", () => {
  assert.match(html, /href="#main"/);
  assert.match(html, /<main id="main"/);
  assert.match(html, /aria-label="主导航"/);
  assert.match(html, /aria-label="打开导航"/);
});
